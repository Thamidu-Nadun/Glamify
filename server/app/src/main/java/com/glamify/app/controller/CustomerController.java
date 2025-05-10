package com.glamify.app.controller;

import com.glamify.app.dto.CustomerDTO;
import com.glamify.app.models.Appointment;
import com.glamify.app.models.Service;
import com.glamify.app.models.Feedback;
import com.glamify.app.service.CustomerService;
import com.glamify.app.exception.CustomerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping
    public ResponseEntity<CustomerDTO> registerCustomer(@RequestBody CustomerDTO customerDTO) {
        try {
            CustomerDTO registeredCustomer = customerService.registerCustomer(customerDTO);
            return ResponseEntity.ok(registeredCustomer);
        } catch (CustomerException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerDTO> getCustomer(@PathVariable String id) {
        try {
            CustomerDTO customer = customerService.getCustomerById(id);
            return ResponseEntity.ok(customer);
        } catch (CustomerException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerDTO> updateCustomer(
            @PathVariable String id,
            @RequestBody CustomerDTO customerDTO) {
        try {
            CustomerDTO updatedCustomer = customerService.updateCustomer(id, customerDTO);
            return ResponseEntity.ok(updatedCustomer);
        } catch (CustomerException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable String id) {
        try {
            customerService.deleteCustomer(id);
            return ResponseEntity.ok().build();
        } catch (CustomerException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/appointments")
    public ResponseEntity<Void> bookAppointment(
            @PathVariable String id,
            @RequestBody AppointmentDTO appointment) {
        try {
            customerService.bookAppointment(id, appointment);
            return ResponseEntity.ok().build();
        } catch (CustomerException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}/appointments/{appointmentId}")
    public ResponseEntity<Void> cancelAppointment(
            @PathVariable String id,
            @PathVariable String appointmentId) {
        try {
            customerService.cancelAppointment(id, appointmentId);
            return ResponseEntity.ok().build();
        } catch (CustomerException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}/appointments/{appointmentId}")
    public ResponseEntity<Void> rescheduleAppointment(
            @PathVariable String id,
            @PathVariable String appointmentId,
            @RequestBody AppointmentDTO newAppointment) {
        try {
            customerService.rescheduleAppointment(id, appointmentId, newAppointment);
            return ResponseEntity.ok().build();
        } catch (CustomerException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/{id}/feedback")
    public ResponseEntity<Void> addFeedback(
            @PathVariable String id,
            @RequestBody FeedbackDTO feedback) {
        try {
            customerService.addFeedback(id, feedback);
            return ResponseEntity.ok().build();
        } catch (CustomerException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}/services/available")
    public ResponseEntity<List<Service>> viewAvailableServices(
            @PathVariable String id,
            @RequestBody List<Service> allServices) {
        try {
            List<Service> availableServices = customerService.viewAvailableServices(id, allServices);
            return ResponseEntity.ok(availableServices);
        } catch (CustomerException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/slots/available")
    public ResponseEntity<List<LocalDateTime>> viewAvailableTimeSlots(
            @PathVariable String id,
            @RequestParam String serviceId,
            @RequestBody List<LocalDateTime> allTimeSlots) {
        try {
            Service service = new Service(serviceId, "", "", 0.0, 0);
            List<LocalDateTime> availableSlots = customerService.viewAvailableTimeSlots(id, service, allTimeSlots);
            return ResponseEntity.ok(availableSlots);
        } catch (CustomerException e) {
            return ResponseEntity.notFound().build();
        }
    }
}