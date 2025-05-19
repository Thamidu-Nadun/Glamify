package app.repository;

import app.models.Customer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;

import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentLinkedQueue;

public class CustomerRepository {
    private static final String FILE_PATH = "db/customers.json";
    private static final String QUEUE_FILE_PATH = "db/appointment_queue.json";
    private final ObjectMapper objectMapper;
    private final File customerFile;
    private final File queueFile;
    private Queue<Customer> appointmentQueue;

    public CustomerRepository() {
        this.objectMapper = new ObjectMapper();
        this.customerFile = new File(FILE_PATH);
        this.queueFile = new File(QUEUE_FILE_PATH);
        this.appointmentQueue = new ConcurrentLinkedQueue<>();
        
        // Initialize files if they don't exist
        initializeFiles();
        // Load existing queue
        loadQueue();
    }

    private void initializeFiles() {
        try {
            if (!customerFile.exists()) {
                customerFile.getParentFile().mkdirs();
                objectMapper.writeValue(customerFile, new ArrayList<Customer>());
            }
            if (!queueFile.exists()) {
                queueFile.getParentFile().mkdirs();
                objectMapper.writeValue(queueFile, new ArrayList<Customer>());
            }
        } catch (IOException e) {
            throw new RuntimeException("Failed to initialize database files", e);
        }
    }

    private void loadQueue() {
        try {
            CollectionType type = objectMapper.getTypeFactory().constructCollectionType(List.class, Customer.class);
            List<Customer> customers = objectMapper.readValue(queueFile, type);
            appointmentQueue.addAll(customers);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load appointment queue", e);
        }
    }

    private void saveQueue() {
        try {
            objectMapper.writeValue(queueFile, new ArrayList<>(appointmentQueue));
        } catch (IOException e) {
            throw new RuntimeException("Failed to save appointment queue", e);
        }
    }

    public List<Customer> findAll() {
        try {
            CollectionType type = objectMapper.getTypeFactory().constructCollectionType(List.class, Customer.class);
            return objectMapper.readValue(customerFile, type);
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
            objectMapper.writeValue(customerFile, customers);
            return customer;
        } catch (IOException e) {
            throw new RuntimeException("Failed to save customer to database", e);
        }
    }

    public void delete(String id) {
        List<Customer> customers = findAll();
        customers.removeIf(c -> c.getId().equals(id));
        try {
            objectMapper.writeValue(customerFile, customers);
        } catch (IOException e) {
            throw new RuntimeException("Failed to delete customer from database", e);
        }
    }

    // Queue operations
    public void addToQueue(Customer customer) {
        appointmentQueue.offer(customer);
        saveQueue();
    }

    public Customer removeFromQueue() {
        Customer customer = appointmentQueue.poll();
        if (customer != null) {
            saveQueue();
        }
        return customer;
    }

    public Customer peekQueue() {
        return appointmentQueue.peek();
    }

    public boolean isQueueEmpty() {
        return appointmentQueue.isEmpty();
    }

    public int getQueueSize() {
        return appointmentQueue.size();
    }

    public List<Customer> getQueueAsList() {
        return new ArrayList<>(appointmentQueue);
    }
} 