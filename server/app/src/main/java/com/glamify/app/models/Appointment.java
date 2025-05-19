package com.glamify.app.models;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Future;
import java.time.LocalDateTime;

public class Appointment {
    private String id;

    @NotNull(message = "Customer is required")
    private Customer customer;

    @NotNull(message = "Service is required")
    private Service service;

    @NotNull(message = "Appointment time is required")
    @Future(message = "Appointment time must be in the future")
    private LocalDateTime appointmentTime;

    @NotNull(message = "Status is required")
    private AppointmentStatus status;

    public enum AppointmentStatus {
        SCHEDULED,
        CONFIRMED,
        COMPLETED,
        CANCELLED,
        RESCHEDULED
    }

    // Default constructor for JSON deserialization
    public Appointment() {}

    public Appointment(String id, Customer customer, Service service, LocalDateTime appointmentTime, AppointmentStatus status) {
        this.id = id;
        this.customer = customer;
        this.service = service;
        this.appointmentTime = appointmentTime;
        this.status = status;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public Customer getCustomer() { return customer; }
    public void setCustomer(Customer customer) { this.customer = customer; }

    public Service getService() { return service; }
    public void setService(Service service) { this.service = service; }

    public LocalDateTime getAppointmentTime() { return appointmentTime; }
    public void setAppointmentTime(LocalDateTime appointmentTime) { this.appointmentTime = appointmentTime; }

    public AppointmentStatus getStatus() { return status; }
    public void setStatus(AppointmentStatus status) { this.status = status; }

    @Override
    public String toString() {
        return "Appointment{" +
                "id='" + id + '\'' +
                ", customer=" + (customer != null ? customer.getId() : "null") +
                ", service=" + (service != null ? service.getId() : "null") +
                ", appointmentTime=" + appointmentTime +
                ", status=" + status +
                '}';
    }
} 