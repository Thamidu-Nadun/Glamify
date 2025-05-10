package com.glamify.app.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Customer {
    private String id;
    private String name;
    private String email;
    private String contactNumber;
    private List<AppointmentDTO> appointments;
    private List<FeedbackDTO> feedbacks;
    private static final int MIN_CANCELLATION_HOURS = 24;

    public Customer(String id, String name, String email, String contactNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contactNumber = contactNumber;
        this.appointments = new ArrayList<>();
        this.feedbacks = new ArrayList<>();
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public List<AppointmentDTO> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<AppointmentDTO> appointments) {
        this.appointments = appointments;
    }

    public List<FeedbackDTO> getFeedbacks() {
        return feedbacks;
    }

    public void setFeedbacks(List<FeedbackDTO> feedbacks) {
        this.feedbacks = feedbacks;
    }

    // Business Methods
    public void bookAppointment(AppointmentDTO appointment) {
        if (isValidAppointmentTime(appointment.getAppointmentTime())) {
            appointments.add(appointment);
        } else {
            throw new IllegalArgumentException("Invalid appointment time. Please select a future time slot.");
        }
    }

    public boolean cancelAppointment(String appointmentId) {
        AppointmentDTO appointment = findAppointment(appointmentId);
        if (appointment != null && canCancelAppointment(appointment)) {
            appointment.setStatus(AppointmentDTO.AppointmentStatus.CANCELLED);
            return appointments.removeIf(a -> a.getId().equals(appointmentId));
        }
        return false;
    }

    public boolean rescheduleAppointment(String appointmentId, AppointmentDTO newAppointment) {
        AppointmentDTO oldAppointment = findAppointment(appointmentId);
        if (oldAppointment != null && canRescheduleAppointment(oldAppointment)) {
            if (isValidAppointmentTime(newAppointment.getAppointmentTime())) {
                oldAppointment.setStatus(AppointmentDTO.AppointmentStatus.RESCHEDULED);
                oldAppointment.setAppointmentTime(newAppointment.getAppointmentTime());
                return true;
            }
        }
        return false;
    }

    public void addFeedback(FeedbackDTO feedback) {
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

    private boolean canCancelAppointment(AppointmentDTO appointment) {
        return appointment.getStatus() == AppointmentDTO.AppointmentStatus.SCHEDULED &&
                appointment.getAppointmentTime().isAfter(LocalDateTime.now().plusHours(MIN_CANCELLATION_HOURS));
    }

    private boolean canRescheduleAppointment(AppointmentDTO appointment) {
        return appointment.getStatus() == AppointmentDTO.AppointmentStatus.SCHEDULED &&
                appointment.getAppointmentTime().isAfter(LocalDateTime.now().plusHours(MIN_CANCELLATION_HOURS));
    }

    private boolean canProvideFeedback(AppointmentDTO appointment) {
        return appointment.getStatus() == AppointmentDTO.AppointmentStatus.COMPLETED &&
                appointment.getAppointmentTime().isBefore(LocalDateTime.now());
    }

    private boolean isServiceBooked(Service service) {
        return appointments.stream()
                .anyMatch(appointment -> appointment.getService().getId().equals(service.getId()) &&
                        appointment.getStatus() == AppointmentDTO.AppointmentStatus.SCHEDULED);
    }

    private boolean isTimeSlotAvailable(LocalDateTime timeSlot, Service service) {
        return timeSlot.isAfter(LocalDateTime.now()) &&
                !appointments.stream()
                        .anyMatch(appointment -> appointment.getAppointmentTime().equals(timeSlot) &&
                                appointment.getStatus() == AppointmentDTO.AppointmentStatus.SCHEDULED);
    }

    private AppointmentDTO findAppointment(String appointmentId) {
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