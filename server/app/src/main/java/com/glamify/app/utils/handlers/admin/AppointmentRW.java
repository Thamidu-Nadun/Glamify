package com.glamify.app.utils.handlers.admin;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;
//
import com.glamify.app.entity.Appointment;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class AppointmentRW {
    private String path = "server/db/appointments.json";

    public void WriteAppointment(List<Appointment> appointments) {
        Gson gson = new Gson();
        try {
            File file = new File(path);
            // Create file if it doesn't exist
            if (!file.exists()) {
                file.createNewFile();
            }
            BufferedWriter writer = new BufferedWriter(new FileWriter(path));

            Type AppointmentLisType = new TypeToken<List<Appointment>>() {
            }.getType();
            String appointment_json = gson.toJson(appointments, AppointmentLisType);

            // Write whole list to file
            writer.write(appointment_json);
            writer.close();
        } catch (IOException e) {
            System.out.println(e.toString());
        }
    }

    public List<Appointment> ReadAppointment() {
        Gson gson = new Gson();
        try {
            File file = new File(path);
            // Create file if it doesn't exist
            if (!file.exists()) {
                file.createNewFile();
            }
            BufferedReader reader = new BufferedReader(new FileReader(path));

            Type AppointmentListType = new TypeToken<List<Appointment>>() {
            }.getType();
            String content = reader.readLine();
            reader.close();

            List<Appointment> appointment_list = gson.fromJson(content, AppointmentListType);

            return appointment_list;

        } catch (IOException e) {
            System.out.println(e);
            return null;
        }
    }
}
