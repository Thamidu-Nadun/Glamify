package com.glamify.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glamify.app.entity.Appointment;
import com.glamify.app.repo.AppointmentRepo;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepo appointmentRepo;

    public List<Appointment> getAllAppointments() {
        return appointmentRepo.getAllAppointments();
    }

    public Appointment addAppointment(Appointment appointment) {
        return appointmentRepo.addAppointment(appointment);
    }

    public Appointment peekAppointment() {
        return appointmentRepo.peekAppointment();
    }
}
