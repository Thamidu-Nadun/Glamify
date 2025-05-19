package app.repository;

import app.models.Customer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class CustomerRepository {
    private static final String FILE_PATH = "db/customers.json";
    private final ObjectMapper objectMapper;
    private final File file;

    public CustomerRepository() {
        this.objectMapper = new ObjectMapper();
        this.file = new File(FILE_PATH);
        if (!file.exists()) {
            try {
                file.getParentFile().mkdirs();
                objectMapper.writeValue(file, new ArrayList<Customer>());
            } catch (IOException e) {
                throw new RuntimeException("Failed to initialize customers database", e);
            }
        }
    }

    public List<Customer> findAll() {
        try {
            CollectionType type = objectMapper.getTypeFactory().constructCollectionType(List.class, Customer.class);
            return objectMapper.readValue(file, type);
        } catch (IOException e) {
            throw new RuntimeException("Failed to read customers from database", e);
        }
    }

    public Optional<Customer> findById(String id) {
        return findAll().stream()
                .filter(customer -> customer.getId().equals(id))
                .findFirst();
    }

    public Customer save(Customer customer) {
        List<Customer> customers = findAll();
        customers.removeIf(c -> c.getId().equals(customer.getId()));
        customers.add(customer);
        try {
            objectMapper.writeValue(file, customers);
            return customer;
        } catch (IOException e) {
            throw new RuntimeException("Failed to save customer to database", e);
        }
    }

    public void delete(String id) {
        List<Customer> customers = findAll();
        customers.removeIf(c -> c.getId().equals(id));
        try {
            objectMapper.writeValue(file, customers);
        } catch (IOException e) {
            throw new RuntimeException("Failed to delete customer from database", e);
        }
    }
} 