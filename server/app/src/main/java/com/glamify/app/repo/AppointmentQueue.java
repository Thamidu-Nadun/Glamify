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
    private int maxSize;
    private int front;
    private int rear;
    private int numberOfItems;

    public AppointmentQueue(int size) {
        this.maxSize = size;
        this.appointments = new ArrayList<>(size);
        this.front = 0;
        this.rear = -1;
        this.numberOfItems = 0;
    }

    public boolean enqueue(Appointment appointment) {
        if (this.isFull()) {
            System.out.println("Queue is full. Cannot add more appointments.");
            return false;
        } else {
            appointment.setId(idCounter.getAndIncrement());
            appointments.add(++rear, appointment);
            numberOfItems++;
            appointmentRW.WriteAppointment(appointments);
            return true;
        }
    }

    public void dequeue() {
        if (this.isEmpty()) {
            System.out.println("Queue is empty. Cannot remove any appointments.");
            return;
        } else {
            appointments.remove(front);
            front++;
            appointmentRW.WriteAppointment(appointments);
            numberOfItems--;
        }
    }

    public Appointment peek() {
        if (this.isEmpty()) {
            System.out.println("Queue is empty. Cannot peek.");
            return null;
        } else {
            return appointments.get(front);
        }
    }

    public boolean isFull() {
        return numberOfItems == maxSize;
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
