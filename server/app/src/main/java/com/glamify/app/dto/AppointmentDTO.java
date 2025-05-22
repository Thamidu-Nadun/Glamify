package com.glamify.app.dto;

import java.sql.Time;
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
    private Time time;
    private boolean status;
    private boolean payment_status;
    private int duration;
}
