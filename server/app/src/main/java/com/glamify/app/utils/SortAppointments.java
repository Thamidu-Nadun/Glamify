package com.glamify.app.utils;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.glamify.app.entity.Appointment;

public class SortAppointments {
    public List<Appointment> sort(List<Appointment> appointments) {
        // System.out.println("Before sorting:");
        // for (Appointment appointment : appointments) {
        // System.out.println(appointment.getDate() + " " + appointment.getId() + " " +
        // appointment.getCutId() + " "
        // + appointment.getServiceId() + " " + appointment.getDuration() + " " +
        // appointment.getStatus()
        // + " " + appointment.getPaymentStatus());
        // }

        // Sort appointments by date
        // System.out.println("\n\nAfter sorting:");
        // for (Appointment appointment : appointments) {
        // System.out.println(appointment.getDate() + " " + appointment.getId() + " " +
        // appointment.getCutId() + " "
        // + appointment.getServiceId() + " " + appointment.getDuration() + " " +
        // appointment.getStatus()
        // + " " + appointment.getPaymentStatus());
        // }
        List<Appointment> sortAppointments = new ArrayList<>(appointments);
        quickSort(sortAppointments, 0, sortAppointments.size() - 1);
        return sortAppointments;
    }

    public void quickSort(List<Appointment> appointments, int start, int end) {
        if (end <= start)
            return;

        int pivot = partition(appointments, start, end);
        quickSort(appointments, start, pivot - 1);
        quickSort(appointments, pivot + 1, end);
    }

    private int partition(List<Appointment> appointments, int start, int end) {
        Date pivot = appointments.get(end).getDate();
        int i = start - 1;

        for (int j = start; j < end; j++) {
            if (appointments.get(j).getDate().before(pivot)) {
                i++;
                Appointment temp = appointments.get(i);
                appointments.set(i, appointments.get(j));
                appointments.set(j, temp);
            }
        }
        i++;
        Appointment temp = appointments.get(i);
        appointments.set(i, appointments.get(end));
        appointments.set(end, temp);
        return i;
    }
}
