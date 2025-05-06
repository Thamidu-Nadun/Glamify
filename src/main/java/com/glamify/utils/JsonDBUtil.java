package com.glamify.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.glamify.model.Customer;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class JsonDBUtil {
    private static final String CUSTOMER_FILE = "src/main/resources/customers.json";
    private static final ObjectMapper mapper = new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);

    public static List<Customer> loadCustomers() throws IOException {
        File file = new File(CUSTOMER_FILE);
        if (!file.exists()) return new ArrayList<>();
        return Arrays.asList(mapper.readValue(file, Customer[].class));
    }

    public static void saveCustomers(List<Customer> customers) throws IOException {
        mapper.writeValue(new File(CUSTOMER_FILE), customers);
    }
}