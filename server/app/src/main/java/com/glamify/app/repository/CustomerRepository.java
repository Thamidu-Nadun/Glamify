package com.glamify.app.repository;

import com.glamify.app.models.Customer;
import com.glamify.app.utils.handlers.customer.CustomerRW;
import com.glamify.app.exception.CustomerException;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Repository
public class CustomerRepository {
    private final CustomerRW customerRW;
    private List<Customer> customers;

    public CustomerRepository(CustomerRW customerRW) {
        this.customerRW = customerRW;
        this.customers = new ArrayList<>();
        init_data_from_db();
    }

    public void init_data_from_db() {
        try {
            List<Customer> loadedCustomers = customerRW.ReadCustomer();
            if (loadedCustomers != null) {
                this.customers = loadedCustomers;
            }
        } catch (Exception e) {
            throw new CustomerException("Failed to initialize customer data", e);
        }
    }

    public Customer save(Customer customer) {
        if (customer == null) {
            throw new CustomerException("Customer cannot be null");
        }

        try {
            if (customer.getId() == null) {
                customer.setId(UUID.randomUUID().toString());
            }
            
            // Update existing customer or add new one
            customers = customers.stream()
                .filter(c -> !c.getId().equals(customer.getId()))
                .collect(Collectors.toList());
            customers.add(customer);
            
            // Save to file
            customerRW.WriteCustomer(customers);
            return customer;
        } catch (Exception e) {
            throw new CustomerException("Failed to save customer", e);
        }
    }

    public Optional<Customer> findById(String id) {
        if (id == null) {
            return Optional.empty();
        }
        return customers.stream()
            .filter(customer -> customer.getId().equals(id))
            .findFirst();
    }

    public Optional<Customer> findByEmail(String email) {
        if (email == null) {
            return Optional.empty();
        }
        return customers.stream()
            .filter(customer -> customer.getEmail().equals(email))
            .findFirst();
    }

    public List<Customer> findAll() {
        return new ArrayList<>(customers);
    }

    public void deleteById(String id) {
        if (id == null) {
            throw new CustomerException("Customer ID cannot be null");
        }

        try {
            customers = customers.stream()
                .filter(customer -> !customer.getId().equals(id))
                .collect(Collectors.toList());
            
            // Save to file
            customerRW.WriteCustomer(customers);
        } catch (Exception e) {
            throw new CustomerException("Failed to delete customer", e);
        }
    }

    public boolean existsByEmail(String email) {
        if (email == null) {
            return false;
        }
        return customers.stream()
            .anyMatch(customer -> customer.getEmail().equals(email));
    }

    public List<Customer> findByNameContaining(String name) {
        String searchName = name.toLowerCase();
        return customers.stream()
                .filter(customer -> customer.getName().toLowerCase().contains(searchName))
                .collect(Collectors.toList());
    }
} 