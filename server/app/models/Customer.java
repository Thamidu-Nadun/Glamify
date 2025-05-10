package app.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Customer {
    private String id;
    private String name;
    private String email;
    private String contactNumber;
    private List<Appointment> appointments;
    private List<Feedback> feedbacks;
    private static final int MIN_CANCELLATION_HOURS = 24; // Minimum hours before appointment for cancellation

    public Customer(String id, String name, String email, String contactNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contactNumber = contactNumber;
        this.appointments = new ArrayList<>();
        this.feedbacks = new ArrayList<>();
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getContactNumber() { return contactNumber; }
    public void setContactNumber(String contactNumber) { this.contactNumber = contactNumber; }

    public List<Appointment> getAppointments() { return appointments; }
    public void setAppointments(List<Appointment> appointments) { this.appointments = appointments; }

    public List<Feedback> getFeedbacks() { return feedbacks; }
    public void setFeedbacks(List<Feedback> feedbacks) { this.feedbacks = feedbacks; }

    // Business Methods
    public void bookAppointment(Appointment appointment) {
        if (isValidAppointmentTime(appointment.getAppointmentTime())) {
            appointments.add(appointment);
        } else {
            throw new IllegalArgumentException("Invalid appointment time. Please select a future time slot.");
        }
    }

    public boolean cancelAppointment(String appointmentId) {
        Appointment appointment = findAppointment(appointmentId);
        if (appointment != null && canCancelAppointment(appointment)) {
            appointment.setStatus(Appointment.AppointmentStatus.CANCELLED);
            return appointments.removeIf(a -> a.getId().equals(appointmentId));
        }
        return false;
    }

    public boolean rescheduleAppointment(String appointmentId, Appointment newAppointment) {
        Appointment oldAppointment = findAppointment(appointmentId);
        if (oldAppointment != null && canRescheduleAppointment(oldAppointment)) {
            if (isValidAppointmentTime(newAppointment.getAppointmentTime())) {
                oldAppointment.setStatus(Appointment.AppointmentStatus.RESCHEDULED);
                oldAppointment.setAppointmentTime(newAppointment.getAppointmentTime());
                return true;
            }
        }
        return false;
    }

    public void addFeedback(Feedback feedback) {
        if (canProvideFeedback(feedback.getAppointment())) {
            feedbacks.add(feedback);
        } else {
            throw new IllegalArgumentException("Cannot provide feedback for this appointment.");
        }
    }

    // New Methods for Viewing Services and Slots
    public List<Service> viewAvailableServices(List<Service> allServices) {
        return allServices.stream()
                .filter(service -> !isServiceBooked(service))
                .collect(Collectors.toList());
    }

    public List<LocalDateTime> viewAvailableTimeSlots(Service service, List<LocalDateTime> allTimeSlots) {
        return allTimeSlots.stream()
                .filter(timeSlot -> isTimeSlotAvailable(timeSlot, service))
                .collect(Collectors.toList());
    }

    // Helper Methods
    private boolean isValidAppointmentTime(LocalDateTime appointmentTime) {
        return appointmentTime.isAfter(LocalDateTime.now());
    }

    private boolean canCancelAppointment(Appointment appointment) {
        return appointment.getStatus() == Appointment.AppointmentStatus.SCHEDULED &&
               appointment.getAppointmentTime().isAfter(LocalDateTime.now().plusHours(MIN_CANCELLATION_HOURS));
    }

    private boolean canRescheduleAppointment(Appointment appointment) {
        return appointment.getStatus() == Appointment.AppointmentStatus.SCHEDULED &&
               appointment.getAppointmentTime().isAfter(LocalDateTime.now().plusHours(MIN_CANCELLATION_HOURS));
    }

    private boolean canProvideFeedback(Appointment appointment) {
        return appointment.getStatus() == Appointment.AppointmentStatus.COMPLETED &&
               appointment.getAppointmentTime().isBefore(LocalDateTime.now());
    }

    private boolean isServiceBooked(Service service) {
        return appointments.stream()
                .anyMatch(appointment -> 
                    appointment.getService().getId().equals(service.getId()) &&
                    appointment.getStatus() == Appointment.AppointmentStatus.SCHEDULED);
    }

    private boolean isTimeSlotAvailable(LocalDateTime timeSlot, Service service) {
        return timeSlot.isAfter(LocalDateTime.now()) &&
               !appointments.stream()
                   .anyMatch(appointment ->
                       appointment.getAppointmentTime().equals(timeSlot) &&
                       appointment.getStatus() == Appointment.AppointmentStatus.SCHEDULED);
    }

    private Appointment findAppointment(String appointmentId) {
        return appointments.stream()
                .filter(appointment -> appointment.getId().equals(appointmentId))
                .findFirst()
                .orElse(null);
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", contactNumber='" + contactNumber + '\'' +
                '}';
    }
} 