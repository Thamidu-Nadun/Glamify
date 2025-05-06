package com.glamify.app.utils.handlers.admin;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;

import com.glamify.app.entity.Admin;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class AdminRW {
    private String path = "server/db/admin.json";

    public void WriteAdmin(List<Admin> admins) {
        Gson gson = new Gson();
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(path));

            Type adminLisType = new TypeToken<List<Admin>>() {
            }.getType();
            String admin_json = gson.toJson(admins, adminLisType);

            // Write whole list to file
            writer.write(admin_json);
            writer.close();
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}
