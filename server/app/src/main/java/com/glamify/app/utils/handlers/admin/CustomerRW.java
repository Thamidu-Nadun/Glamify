package com.glamify.app.utils.handlers.admin;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;

import com.glamify.app.entity.Customer;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class CustomerRW {
    private String path = "server/db/customer.json";

    public void WriteCustomer(List<Customer> customers) {
        Gson gson = new Gson();
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(path));

            Type CustomerLisType = new TypeToken<List<Customer>>() {
            }.getType();
            String customer_json = gson.toJson(customers, CustomerLisType);

            // Write whole list to file
            writer.write(customer_json);
            writer.close();
        } catch (IOException e) {
            System.out.println(e);
        }
    }

    public List<Customer> ReadCustomer() {
        Gson gson = new Gson();
        try {
            BufferedReader reader = new BufferedReader(new FileReader(path));

            Type customerListType = new TypeToken<List<Customer>>() {
            }.getType();
            String content = reader.readLine();
            reader.close();

            List<Customer> customer_list = gson.fromJson(content, customerListType);

            return customer_list;

        } catch (IOException e) {
            System.out.println(e);
            return null;
        }
    }
}
