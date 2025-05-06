package com.glamify.controller;

import com.glamify.model.Customer;
import com.glamify.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Customer customer) {
        try {
            customerService.registerCustomer(customer);
            return ResponseEntity.ok("Customer registered.");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error registering.");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomer(@PathVariable String id) {
        try {
            Customer customer = customerService.getCustomerById(id);
            return customer != null ? ResponseEntity.ok(customer) : ResponseEntity.notFound().build();
        } catch (IOException e) {
            return ResponseEntity.status(500).build();
        }
    }

    @PostMapping("/{id}/book")
    public ResponseEntity<String> book(@PathVariable String id, @RequestBody String appointmentId) {
        try {
            customerService.bookAppointment(id, appointmentId);
            return ResponseEntity.ok("Appointment booked.");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error booking.");
        }
    }

    @PostMapping("/{id}/cancel")
    public ResponseEntity<String> cancel(@PathVariable String id, @RequestBody String appointmentId) {
        try {
            customerService.cancelAppointment(id, appointmentId);
            return ResponseEntity.ok("Appointment canceled.");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error canceling.");
        }
    }

    @PostMapping("/{id}/feedback")
    public ResponseEntity<String> feedback(@PathVariable String id, @RequestBody String feedback) {
        try {
            Customer customer = customerService.getCustomerById(id);
            if (customer != null) {
                customer.setFeedback(feedback);
                customerService.updateCustomer(customer);
                return ResponseEntity.ok("Feedback submitted.");
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error saving feedback.");
        }
    }
}
