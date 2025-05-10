package com.glamify.app.repository;

import com.glamify.app.models.Customer;
import com.glamify.app.utils.JsonFileStorage;
import com.google.gson.reflect.TypeToken;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class CustomerRepository {
    private final JsonFileStorage<Customer> storage;
    private static final String CUSTOMERS_FILE = "data/customers.json";

    public CustomerRepository() {
        this.storage = new JsonFileStorage<>(CUSTOMERS_FILE, new TypeToken<List<Customer>>() {});
    }

    public Customer save(Customer customer) {
        List<Customer> customers = storage.readFromFile();
        
        // If customer exists, update it
        Optional<Customer> existingCustomer = customers.stream()
                .filter(c -> c.getId().equals(customer.getId()))
                .findFirst();
        
        if (existingCustomer.isPresent()) {
            customers = customers.stream()
                    .map(c -> c.getId().equals(customer.getId()) ? customer : c)
                    .collect(Collectors.toList());
        } else {
            customers.add(customer);
        }
        
        storage.writeToFile(customers);
        return customer;
    }

    public Optional<Customer> findById(String id) {
        return storage.readFromFile().stream()
                .filter(customer -> customer.getId().equals(id))
                .findFirst();
    }

    public Optional<Customer> findByEmail(String email) {
        return storage.readFromFile().stream()
                .filter(customer -> customer.getEmail().equals(email))
                .findFirst();
    }

    public List<Customer> findAll() {
        return storage.readFromFile();
    }

    public void deleteById(String id) {
        List<Customer> customers = storage.readFromFile();
        customers.removeIf(customer -> customer.getId().equals(id));
        storage.writeToFile(customers);
    }

    public boolean existsByEmail(String email) {
        return storage.readFromFile().stream()
                .anyMatch(customer -> customer.getEmail().equals(email));
    }

    public List<Customer> findByNameContaining(String name) {
        String searchName = name.toLowerCase();
        return storage.readFromFile().stream()
                .filter(customer -> customer.getName().toLowerCase().contains(searchName))
                .collect(Collectors.toList());
    }
} 