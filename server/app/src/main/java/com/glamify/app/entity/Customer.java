package com.glamify.app.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customer extends User {
    private Long phone;
    private List<Appointment> appointments;

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void addAppointment(Appointment appointment) {
        this.appointments.add(appointment);
    }

    public void updateAppointment(int index, Appointment appointment) {
        for (Appointment _appointment : appointments) {
            if (index == _appointment.getCut_id()) {
                _appointment.setDate(appointment.getDate());
                _appointment.setStatus(appointment.getStatus());
                _appointment.setPayment_status(appointment.getPaymentStatus());
                _appointment.setDuration(appointment.getDuration());
                _appointment.setCut_id(appointment.getCut_id());
                _appointment.setService_id(appointment.getService_id());
                _appointment.setCut_id(_appointment.getCut_id());
            } else {
                System.out.println("Appointment not found");
            }
        }
    }

    public void removeAppointment(Appointment appointment) {
        this.appointments.remove(appointment);
    }
}
