package com.glamify.app.repo;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.glamify.app.entity.Appointment;
import com.glamify.app.utils.handlers.admin.AppointmentRW;

@Repository
public class AppointmentRepo {
    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    private AppointmentRW appointmentRW;

    private AppointmentQueue appointments = new AppointmentQueue();

    public List<Appointment> getAllAppointments() {
        return appointments.getAppointments();
    }

    public Appointment addAppointment(Appointment appointment) {
        try {
            return appointments.enqueue(appointment);
        } catch (Exception e) {
            return null;
        }
    }

    public Appointment peekAppointment() {
        return appointments.peek();
    }

    public Appointment getAppointmentById(int id) {
        return null;
    }

    public Appointment updateAppointment(int id, Appointment new_appointment) {
        return null;
    }

    public boolean deleteAppointment() {
        try {
            appointments.dequeue();
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public void init_data_from_db() {
        try {
            List<Appointment> init_appointments = appointmentRW.ReadAppointment();
            if (init_appointments == null || init_appointments.isEmpty()) {
                System.out.println("No Customer Data Found");
                return;
            }

            for (Appointment customer : init_appointments) {
                appointments.enqueue(customer);
            }
            System.out.println("Successfully Loaded Customer Data");

        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
}
