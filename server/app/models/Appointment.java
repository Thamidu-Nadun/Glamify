package app.models;

import java.time.LocalDateTime;

public class Appointment {
    private String id;
    private Customer customer;
    private Service service;
    private LocalDateTime appointmentTime;
    private AppointmentStatus status;

    public enum AppointmentStatus {
        SCHEDULED,
        COMPLETED,
        CANCELLED,
        RESCHEDULED
    }

    public Appointment(String id, Customer customer, Service service, LocalDateTime appointmentTime) {
        this.id = id;
        this.customer = customer;
        this.service = service;
        this.appointmentTime = appointmentTime;
        this.status = AppointmentStatus.SCHEDULED;
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
                ", customer=" + customer.getName() +
                ", service=" + service.getName() +
                ", appointmentTime=" + appointmentTime +
                ", status=" + status +
                '}';
    }
} 