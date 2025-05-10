package com.glamify.app.repository;

import com.glamify.app.models.Customer;
import java.util.List;
import java.util.Optional;

public interface CustomerRepository {
    Customer save(Customer customer);
    Optional<Customer> findById(String id);
    Optional<Customer> findByEmail(String email);
    List<Customer> findAll();
    void deleteById(String id);
    boolean existsByEmail(String email);
    List<Customer> findByNameContaining(String name);
} 