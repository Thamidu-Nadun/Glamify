package com.glamify.app.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {
    private int id;
    private int cut_id;
    private int service_id;
    private LocalDateTime date;
    private boolean status;
    private boolean payment_status;
    private int duration;

    public boolean getStatus() {
        return status;
    }

    public boolean getPaymentStatus() {
        return payment_status;
    }
}
