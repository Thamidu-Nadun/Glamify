package app.service;

import app.models.Customer;
import app.repository.CustomerRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class CustomerService {
    private final CustomerRepository customerRepository;

    public CustomerService() {
        this.customerRepository = new CustomerRepository();
    }

    public Customer registerCustomer(String name, String email, String contactNumber) {
        // Validate input
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        if (email == null || !email.matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
            throw new IllegalArgumentException("Invalid email format");
        }
        if (contactNumber == null || !contactNumber.matches("\\d{10}")) {
            throw new IllegalArgumentException("Contact number must be 10 digits");
        }

        // Check if email already exists
        if (customerRepository.findAll().stream()
                .anyMatch(c -> c.getEmail().equals(email))) {
            throw new IllegalArgumentException("Email already registered");
        }

        Customer customer = new Customer(
            UUID.randomUUID().toString(),
            name,
            email,
            contactNumber
        );

        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerById(String id) {
        return customerRepository.findById(id);
    }

    public Customer updateCustomer(String id, String name, String email, String contactNumber) {
        Customer customer = customerRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Customer not found"));

        if (name != null && !name.trim().isEmpty()) {
            customer.setName(name);
        }
        if (email != null && email.matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
            customer.setEmail(email);
        }
        if (contactNumber != null && contactNumber.matches("\\d{10}")) {
            customer.setContactNumber(contactNumber);
        }

        return customerRepository.save(customer);
    }

    public void deleteCustomer(String id) {
        if (!customerRepository.findById(id).isPresent()) {
            throw new IllegalArgumentException("Customer not found");
        }
        customerRepository.delete(id);
    }
} 