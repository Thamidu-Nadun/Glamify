package com.glamify.app.utils.handlers.customer;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;
import java.io.File;
import java.util.ArrayList;

import com.glamify.app.models.Customer;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class CustomerRW {
    private String path = "server/db/customer.json";

    public CustomerRW() {
        // Create directory if it doesn't exist
        File directory = new File("server/db");
        if (!directory.exists()) {
            directory.mkdirs();
        }
    }

    public void WriteCustomer(List<Customer> customers) {
        Gson gson = new Gson();
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(path));

            Type customerListType = new TypeToken<List<Customer>>() {
            }.getType();
            String customer_json = gson.toJson(customers, customerListType);

            // Write whole list to file
            writer.write(customer_json);
            writer.close();
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }
    }

    public List<Customer> ReadCustomer() {
        Gson gson = new Gson();
        try {
            File file = new File(path);
            if (!file.exists()) {
                return new ArrayList<>();
            }

            BufferedReader reader = new BufferedReader(new FileReader(path));

            Type customerListType = new TypeToken<List<Customer>>() {
            }.getType();
            String content = reader.readLine();
            reader.close();

            if (content == null || content.trim().isEmpty()) {
                return new ArrayList<>();
            }

            List<Customer> customer_list = gson.fromJson(content, customerListType);
            return customer_list != null ? customer_list : new ArrayList<>();

        } catch (IOException e) {
            System.out.println("Error reading from file: " + e.getMessage());
            return new ArrayList<>();
        }
    }
} 