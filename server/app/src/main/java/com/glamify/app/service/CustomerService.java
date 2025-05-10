package com.glamify.app.service;

import com.glamify.app.dto.CustomerDTO;
import com.glamify.app.models.Customer;
import com.glamify.app.models.Appointment;
import com.glamify.app.models.Service;
import com.glamify.app.models.Feedback;
import com.glamify.app.repository.CustomerRepository;
import com.glamify.app.exception.CustomerException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

public class CustomerService {
    private final CustomerRepository customerRepository;
    private static final int MIN_CANCELLATION_HOURS = 24;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    // Customer Registration
    public CustomerDTO registerCustomer(CustomerDTO customerDTO) {
        if (customerRepository.existsByEmail(customerDTO.getEmail())) {
            throw new CustomerException("Email already registered");
        }

        Customer customer = new Customer(
                UUID.randomUUID().toString(),
                customerDTO.getName(),
                customerDTO.getEmail(),
                customerDTO.getContactNumber());

        Customer savedCustomer = customerRepository.save(customer);
        return convertToDTO(savedCustomer);
    }

    // View Customer
    public CustomerDTO getCustomerById(String id) {
        return customerRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new CustomerException("Customer not found"));
    }

    // Update Customer
    public CustomerDTO updateCustomer(String id, CustomerDTO customerDTO) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new CustomerException("Customer not found"));

        customer.setName(customerDTO.getName());
        customer.setContactNumber(customerDTO.getContactNumber());

        Customer updatedCustomer = customerRepository.save(customer);
        return convertToDTO(updatedCustomer);
    }

    // Delete Customer
    public void deleteCustomer(String id) {
        if (!customerRepository.findById(id).isPresent()) {
            throw new CustomerException("Customer not found");
        }
        customerRepository.deleteById(id);
    }

    // Book Appointment
    public void bookAppointment(String customerId, AppointmentDTO appointment) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

        if (!isValidAppointmentTime(appointment.getAppointmentTime())) {
            throw new CustomerException("Invalid appointment time");
        }

        customer.bookAppointment(appointment);
        customerRepository.save(customer);
    }

    // Cancel Appointment
    public void cancelAppointment(String customerId, String appointmentId) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

        if (!customer.cancelAppointment(appointmentId)) {
            throw new CustomerException("Cannot cancel appointment");
        }

        customerRepository.save(customer);
    }

    // Reschedule Appointment
    public void rescheduleAppointment(String customerId, String appointmentId, AppointmentDTO newAppointment) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

        if (!customer.rescheduleAppointment(appointmentId, newAppointment)) {
            throw new CustomerException("Cannot reschedule appointment");
        }

        customerRepository.save(customer);
    }

    // Add Feedback
    public void addFeedback(String customerId, FeedbackDTO feedback) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

        customer.addFeedback(feedback);
        customerRepository.save(customer);
    }

    // View Available Services
    public List<Service> viewAvailableServices(String customerId, List<Service> allServices) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

        return customer.viewAvailableServices(allServices);
    }

    // View Available Time Slots
    public List<LocalDateTime> viewAvailableTimeSlots(String customerId, Service service,
            List<LocalDateTime> allTimeSlots) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

        return customer.viewAvailableTimeSlots(service, allTimeSlots);
    }

    // Helper Methods
    private CustomerDTO convertToDTO(Customer customer) {
        CustomerDTO dto = new CustomerDTO(
                customer.getId(),
                customer.getName(),
                customer.getEmail(),
                customer.getContactNumber());

        dto.setAppointmentIds(customer.getAppointments().stream()
                .map(AppointmentDTO::getId)
                .collect(Collectors.toList()));

        dto.setFeedbackIds(customer.getFeedbacks().stream()
                .map(FeedbackDTO::getId)
                .collect(Collectors.toList()));

        return dto;
    }

    private boolean isValidAppointmentTime(LocalDateTime appointmentTime) {
        return appointmentTime.isAfter(LocalDateTime.now());
    }
}