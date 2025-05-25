package com.glamify.app.repo;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;

import com.glamify.app.entity.Appointment;
import com.glamify.app.utils.handlers.admin.AppointmentRW;

public class AppointmentQueue {
    @Autowired
    private AppointmentRW appointmentRW;

    private AtomicInteger idCounter = new AtomicInteger(0);
    private List<Appointment> appointments;
    private int numberOfItems;

    public AppointmentQueue() {
        this.appointments = new ArrayList<>();
        this.numberOfItems = 0;
    }

    public Appointment enqueue(Appointment appointment) {
        try {
            appointment.setId(idCounter.getAndIncrement());
            appointments.add(appointment);
            numberOfItems++;
            appointmentRW.WriteAppointment(appointments);
            return appointment;
        } catch (Exception e) {
            System.out.println("Error while adding appointment: " + e.getMessage());
            return null;
        }
    }

    public void dequeue() {
        if (this.isEmpty()) {
            System.out.println("Queue is empty. Cannot remove any appointments.");
            return;
        } else {
            appointments.remove(0);
            appointmentRW.WriteAppointment(appointments);
            numberOfItems--;
        }
    }

    public Appointment peek() {
        if (this.isEmpty()) {
            System.out.println("Queue is empty. Cannot peek.");
            return null;
        } else {
            return appointments.get(appointments.size() - 1);
        }
    }

    public boolean isFull() {
        return numberOfItems == appointments.size();
    }

    public boolean isEmpty() {
        return numberOfItems == 0;
    }

    public int getSize() {
        return numberOfItems;
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }
}
