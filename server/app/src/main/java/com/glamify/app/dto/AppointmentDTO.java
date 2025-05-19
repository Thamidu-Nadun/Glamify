package com.glamify.app.dto;

<<<<<<< HEAD
import com.glamify.app.models.Appointment.AppointmentStatus;
import java.time.LocalDateTime;

public class AppointmentDTO {
    private String id;
    private String customerId;
    private String serviceId;
    private LocalDateTime appointmentTime;
    private AppointmentStatus status;

    // Default constructor for JSON deserialization
    public AppointmentDTO() {}

    public AppointmentDTO(String id, String customerId, String serviceId, LocalDateTime appointmentTime, AppointmentStatus status) {
        this.id = id;
        this.customerId = customerId;
        this.serviceId = serviceId;
        this.appointmentTime = appointmentTime;
        this.status = status;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getCustomerId() { return customerId; }
    public void setCustomerId(String customerId) { this.customerId = customerId; }

    public String getServiceId() { return serviceId; }
    public void setServiceId(String serviceId) { this.serviceId = serviceId; }

    public LocalDateTime getAppointmentTime() { return appointmentTime; }
    public void setAppointmentTime(LocalDateTime appointmentTime) { this.appointmentTime = appointmentTime; }

    public AppointmentStatus getStatus() { return status; }
    public void setStatus(AppointmentStatus status) { this.status = status; }
} 
=======
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDTO {
    private int id;
    private int cut_id;
    private int service_id;
    private Date date;
    private boolean status;
    private boolean payment_status;
    private int duration;
}
>>>>>>> 6f0588f11fdf7f66336a8998b8788740ca9aa98e
