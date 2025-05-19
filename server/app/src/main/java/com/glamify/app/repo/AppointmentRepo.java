package com.glamify.app.repo;

import java.lang.reflect.Type;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.glamify.app.entity.Appointment;

@Repository
public class AppointmentRepo {
    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper modelMapper;

    private Queue<Appointment> appointments = new LinkedList<>();

    public List<Appointment> getAllAppointments() {
        Type appointmentListType = new TypeToken<List<Appointment>>() {
        }.getType();

        return modelMapper.map(appointments, appointmentListType);
    }

    public Appointment addAppointment(Appointment appointment) {
        appointments.add(appointment);
        customerRepo.addAppointmentToCustomer(appointment.getCut_id(), appointment);
        return appointment;
    }

    public Appointment getAppointmentById(int id) {
        for (Appointment appointment : appointments) {
            if (appointment.getId() == id) {
                return appointment;
            }
        }
        return null;
    }

    public Appointment updateAppointment(int id, Appointment new_appointment) {
        for (Appointment appointment : appointments) {
            if (appointment.getId() == id) {
                appointment.setDate(new_appointment.getDate());
                appointment.setStatus(new_appointment.getStatus());
                appointment.setPayment_status(new_appointment.getPaymentStatus());
                appointment.setDuration(new_appointment.getDuration());
                appointment.setCut_id(new_appointment.getCut_id());
                appointment.setService_id(new_appointment.getService_id());
                appointment.setCut_id(appointment.getCut_id());

                customerRepo.updateAppointmentOfCustomer(appointment.getCut_id(), id, new_appointment);
                return appointment;
            }
        }
        return null;
    }

    public boolean deleteAppointment(int id) {
        for (Appointment appointment : appointments) {
            if (appointment.getId() == id) {
                appointments.remove(appointment);
                customerRepo.removeAppointmentFromCustomer(appointment.getCut_id(), appointment);
                return true;
            }
        }
        return false;
    }
}
