package com.glamify.app.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Customer {
    private String id;

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Contact number is required")
    @Pattern(regexp = "^\\+?[1-9]\\d{1,14}$", message = "Invalid contact number format")
    private String contactNumber;

    @NotNull(message = "Appointments list cannot be null")
    private List<Appointment> appointments;

    @NotNull(message = "Feedbacks list cannot be null")
    private List<Feedback> feedbacks;

    private static final int MIN_CANCELLATION_HOURS = 24;
    private static final int MAX_APPOINTMENTS_PER_DAY = 3;

    // Default constructor for JSON deserialization
    public Customer() {
        this.appointments = new ArrayList<>();
        this.feedbacks = new ArrayList<>();
    }

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
    public void setAppointments(List<Appointment> appointments) { 
        this.appointments = appointments != null ? appointments : new ArrayList<>(); 
    }

    public List<Feedback> getFeedbacks() { return feedbacks; }
    public void setFeedbacks(List<Feedback> feedbacks) { 
        this.feedbacks = feedbacks != null ? feedbacks : new ArrayList<>(); 
    }

    // Business Methods
    public void bookAppointment(Appointment appointment) {
        if (appointment == null) {
            throw new IllegalArgumentException("Appointment cannot be null");
        }
        if (!isValidAppointmentTime(appointment.getAppointmentTime())) {
            throw new IllegalArgumentException("Invalid appointment time. Please select a future time slot.");
        }
        if (hasReachedDailyAppointmentLimit(appointment.getAppointmentTime())) {
            throw new IllegalArgumentException("Maximum daily appointments limit reached");
        }
        if (hasOverlappingAppointment(appointment)) {
            throw new IllegalArgumentException("Appointment time overlaps with existing appointment");
        }
        appointments.add(appointment);
    }

    public boolean cancelAppointment(String appointmentId) {
        if (appointmentId == null) {
            throw new IllegalArgumentException("Appointment ID cannot be null");
        }
        Appointment appointment = findAppointment(appointmentId);
        if (appointment != null && canCancelAppointment(appointment)) {
            appointment.setStatus(Appointment.AppointmentStatus.CANCELLED);
            return appointments.removeIf(a -> a.getId().equals(appointmentId));
        }
        return false;
    }

    public boolean rescheduleAppointment(String appointmentId, Appointment newAppointment) {
        if (appointmentId == null || newAppointment == null) {
            throw new IllegalArgumentException("Appointment ID and new appointment cannot be null");
        }
        Appointment oldAppointment = findAppointment(appointmentId);
        if (oldAppointment != null && canRescheduleAppointment(oldAppointment)) {
            if (isValidAppointmentTime(newAppointment.getAppointmentTime()) && 
                !hasOverlappingAppointment(newAppointment)) {
                oldAppointment.setStatus(Appointment.AppointmentStatus.RESCHEDULED);
                oldAppointment.setAppointmentTime(newAppointment.getAppointmentTime());
                return true;
            }
        }
        return false;
    }

    public void addFeedback(Feedback feedback) {
        if (feedback == null) {
            throw new IllegalArgumentException("Feedback cannot be null");
        }
        if (!canProvideFeedback(feedback.getAppointment())) {
            throw new IllegalArgumentException("Cannot provide feedback for this appointment.");
        }
        if (hasExistingFeedback(feedback.getAppointment())) {
            throw new IllegalArgumentException("Feedback already exists for this appointment");
        }
        feedbacks.add(feedback);
    }

    // New Methods for Viewing Services and Slots
    public List<Service> viewAvailableServices(List<Service> allServices) {
        if (allServices == null) {
            throw new IllegalArgumentException("Service list cannot be null");
        }
        return allServices.stream()
                .filter(service -> !isServiceBooked(service))
                .collect(Collectors.toList());
    }

    public List<LocalDateTime> viewAvailableTimeSlots(Service service, List<LocalDateTime> allTimeSlots) {
        if (service == null || allTimeSlots == null) {
            throw new IllegalArgumentException("Service and time slots cannot be null");
        }
        return allTimeSlots.stream()
                .filter(timeSlot -> isTimeSlotAvailable(timeSlot, service))
                .collect(Collectors.toList());
    }

    // Helper Methods
    private boolean isValidAppointmentTime(LocalDateTime appointmentTime) {
        return appointmentTime != null && appointmentTime.isAfter(LocalDateTime.now());
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
        return appointment != null &&
               appointment.getStatus() == Appointment.AppointmentStatus.COMPLETED &&
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

    private boolean hasReachedDailyAppointmentLimit(LocalDateTime appointmentTime) {
        return appointments.stream()
                .filter(appointment -> 
                    appointment.getAppointmentTime().toLocalDate().equals(appointmentTime.toLocalDate()) &&
                    appointment.getStatus() == Appointment.AppointmentStatus.SCHEDULED)
                .count() >= MAX_APPOINTMENTS_PER_DAY;
    }

    private boolean hasOverlappingAppointment(Appointment newAppointment) {
        return appointments.stream()
                .anyMatch(existingAppointment ->
                    existingAppointment.getStatus() == Appointment.AppointmentStatus.SCHEDULED &&
                    existingAppointment.getAppointmentTime().equals(newAppointment.getAppointmentTime()));
    }

    private boolean hasExistingFeedback(Appointment appointment) {
        return feedbacks.stream()
                .anyMatch(feedback -> feedback.getAppointment().getId().equals(appointment.getId()));
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