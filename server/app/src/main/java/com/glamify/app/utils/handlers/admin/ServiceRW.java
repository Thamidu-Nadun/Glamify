package com.glamify.app.utils.handlers.admin;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;

import com.glamify.app.entity.Admin;
import com.glamify.app.entity.ServiceEntity;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class ServiceRW {
    private String path = "server/db/service.json";

    public void WriteAdmin(List<ServiceEntity> services) {
        Gson gson = new Gson();
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(path));

            Type serviceLisType = new TypeToken<List<ServiceEntity>>() {
            }.getType();
            String service_json = gson.toJson(services, serviceLisType);

            // Write whole list to file
            writer.write(service_json);
            writer.close();
        } catch (IOException e) {
            System.out.println(e);
        }
    }

    public List<ServiceEntity> ReadService() {
        Gson gson = new Gson();
        try {
            BufferedReader reader = new BufferedReader(new FileReader(path));

            Type serviceListType = new TypeToken<List<ServiceEntity>>() {
            }.getType();
            String content = reader.readLine();
            reader.close();

            List<ServiceEntity> service_list = gson.fromJson(content, serviceListType);

            return service_list;

        } catch (IOException e) {
            System.out.println(e);
            return null;
        }
    }
}
