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

    private int max_appointments = 50;
    private AppointmentQueue appointments = new AppointmentQueue(max_appointments);

    public List<Appointment> getAllAppointments() {
        return appointments.getAppointments();
    }

    public Appointment addAppointment(Appointment appointment) {
        try {
            if (appointments.enqueue(appointment)) {
                return appointment;
            } else {
                return null;
            }
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

    public boolean deleteAppointment(int id) {
        return false;
    }

    public void init_data_from_db() {
        try {
            List<Appointment> init_appointments = appointmentRW.ReadAppointment();

            for (Appointment customer : init_appointments) {
                appointments.enqueue(customer);
            }
            System.out.println("Successfully Loaded Customer Data");

        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
}
