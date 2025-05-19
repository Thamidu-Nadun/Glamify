package com.glamify.app.service;

<<<<<<< HEAD
import com.glamify.app.dto.CustomerDTO;
import com.glamify.app.models.Customer;
import com.glamify.app.models.Appointment;
import com.glamify.app.models.Service;
import com.glamify.app.models.Feedback;
import com.glamify.app.repository.CustomerRepository;
import com.glamify.app.exception.CustomerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
=======
>>>>>>> 6f0588f11fdf7f66336a8998b8788740ca9aa98e
import java.util.List;

<<<<<<< HEAD
@Service
public class CustomerService {
    private final CustomerRepository customerRepository;
    private static final int MIN_CANCELLATION_HOURS = 24;
    private static final int MAX_APPOINTMENTS_PER_DAY = 3;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    // Customer Registration
    public CustomerDTO registerCustomer(CustomerDTO customerDTO) {
        validateCustomerDTO(customerDTO);
        
        if (customerRepository.findByEmail(customerDTO.getEmail()).isPresent()) {
            throw new CustomerException("Email already registered");
        }

        // Validate email format
        if (!isValidEmail(customerDTO.getEmail())) {
            throw new CustomerException("Invalid email format");
        }

        // Validate contact number format
        if (!isValidContactNumber(customerDTO.getContactNumber())) {
            throw new CustomerException("Invalid contact number format");
        }

        Customer customer = new Customer(
            UUID.randomUUID().toString(),
            customerDTO.getName(),
            customerDTO.getEmail(),
            customerDTO.getContactNumber()
        );

        try {
            Customer savedCustomer = customerRepository.save(customer);
            return convertToDTO(savedCustomer);
        } catch (Exception e) {
            throw new CustomerException("Failed to register customer", e);
        }
    }

    // View Customer
    public CustomerDTO getCustomerById(String id) {
        if (!StringUtils.hasText(id)) {
            throw new CustomerException("Customer ID cannot be empty");
        }
        
        try {
            return customerRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new CustomerException("Customer not found"));
        } catch (CustomerException e) {
            throw e;
        } catch (Exception e) {
            throw new CustomerException("Failed to retrieve customer", e);
        }
    }

    // Update Customer
    public CustomerDTO updateCustomer(String id, CustomerDTO customerDTO) {
        if (!StringUtils.hasText(id)) {
            throw new CustomerException("Customer ID cannot be empty");
        }
        validateCustomerDTO(customerDTO);

        try {
            Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new CustomerException("Customer not found"));

            // Don't allow email update as it's used as a unique identifier
            customer.setName(customerDTO.getName());
            customer.setContactNumber(customerDTO.getContactNumber());

            // Validate contact number format
            if (!isValidContactNumber(customerDTO.getContactNumber())) {
                throw new CustomerException("Invalid contact number format");
            }

            Customer updatedCustomer = customerRepository.save(customer);
            return convertToDTO(updatedCustomer);
        } catch (CustomerException e) {
            throw e;
        } catch (Exception e) {
            throw new CustomerException("Failed to update customer", e);
        }
    }

    // Delete Customer
    public void deleteCustomer(String id) {
        if (!StringUtils.hasText(id)) {
            throw new CustomerException("Customer ID cannot be empty");
        }
        
        try {
            if (!customerRepository.findById(id).isPresent()) {
                throw new CustomerException("Customer not found");
            }
            customerRepository.deleteById(id);
        } catch (CustomerException e) {
            throw e;
        } catch (Exception e) {
            throw new CustomerException("Failed to delete customer", e);
        }
    }

    // Book Appointment
    public void bookAppointment(String customerId, Appointment appointment) {
        if (!StringUtils.hasText(customerId)) {
            throw new CustomerException("Customer ID cannot be empty");
        }
        validateAppointment(appointment);

        try {
            Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

            if (!isValidAppointmentTime(appointment.getAppointmentTime())) {
                throw new CustomerException("Invalid appointment time");
            }

            // Check for daily appointment limit
            if (hasReachedDailyAppointmentLimit(customer, appointment.getAppointmentTime())) {
                throw new CustomerException("Maximum daily appointments limit reached");
            }

            customer.bookAppointment(appointment);
            customerRepository.save(customer);
        } catch (CustomerException e) {
            throw e;
        } catch (Exception e) {
            throw new CustomerException("Failed to book appointment", e);
        }
    }

    // Cancel Appointment
    public void cancelAppointment(String customerId, String appointmentId) {
        if (!StringUtils.hasText(customerId) || !StringUtils.hasText(appointmentId)) {
            throw new CustomerException("Customer ID and Appointment ID cannot be empty");
        }

        try {
            Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

            if (!customer.cancelAppointment(appointmentId)) {
                throw new CustomerException("Cannot cancel appointment");
            }

            customerRepository.save(customer);
        } catch (CustomerException e) {
            throw e;
        } catch (Exception e) {
            throw new CustomerException("Failed to cancel appointment", e);
        }
    }

    // Reschedule Appointment
    public void rescheduleAppointment(String customerId, String appointmentId, Appointment newAppointment) {
        if (!StringUtils.hasText(customerId) || !StringUtils.hasText(appointmentId)) {
            throw new CustomerException("Customer ID and Appointment ID cannot be empty");
        }
        validateAppointment(newAppointment);

        try {
            Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

            if (!customer.rescheduleAppointment(appointmentId, newAppointment)) {
                throw new CustomerException("Cannot reschedule appointment");
            }

            customerRepository.save(customer);
        } catch (CustomerException e) {
            throw e;
        } catch (Exception e) {
            throw new CustomerException("Failed to reschedule appointment", e);
        }
    }

    // Add Feedback
    public void addFeedback(String customerId, Feedback feedback) {
        if (!StringUtils.hasText(customerId)) {
            throw new CustomerException("Customer ID cannot be empty");
        }
        validateFeedback(feedback);

        try {
            Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

            customer.addFeedback(feedback);
            customerRepository.save(customer);
        } catch (CustomerException e) {
            throw e;
        } catch (Exception e) {
            throw new CustomerException("Failed to add feedback", e);
        }
    }

    // View Available Services
    public List<Service> viewAvailableServices(String customerId, List<Service> allServices) {
        if (!StringUtils.hasText(customerId)) {
            throw new CustomerException("Customer ID cannot be empty");
        }
        if (allServices == null) {
            throw new CustomerException("Service list cannot be null");
        }

        try {
            Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

            return customer.viewAvailableServices(allServices);
        } catch (CustomerException e) {
            throw e;
        } catch (Exception e) {
            throw new CustomerException("Failed to view available services", e);
        }
    }

    // View Available Time Slots
    public List<LocalDateTime> viewAvailableTimeSlots(String customerId, Service service, List<LocalDateTime> allTimeSlots) {
        if (!StringUtils.hasText(customerId)) {
            throw new CustomerException("Customer ID cannot be empty");
        }
        if (service == null) {
            throw new CustomerException("Service cannot be null");
        }
        if (allTimeSlots == null) {
            throw new CustomerException("Time slots list cannot be null");
        }

        try {
            Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerException("Customer not found"));

            return customer.viewAvailableTimeSlots(service, allTimeSlots);
        } catch (CustomerException e) {
            throw e;
        } catch (Exception e) {
            throw new CustomerException("Failed to view available time slots", e);
        }
    }

    // Helper Methods
    private CustomerDTO convertToDTO(Customer customer) {
        CustomerDTO dto = new CustomerDTO(
            customer.getId(),
            customer.getName(),
            customer.getEmail(),
            customer.getContactNumber()
        );

        dto.setAppointmentIds(customer.getAppointments().stream()
            .map(Appointment::getId)
            .collect(Collectors.toList()));

        dto.setFeedbackIds(customer.getFeedbacks().stream()
            .map(Feedback::getId)
            .collect(Collectors.toList()));

        return dto;
    }

    private boolean isValidAppointmentTime(LocalDateTime appointmentTime) {
        return appointmentTime != null && appointmentTime.isAfter(LocalDateTime.now());
    }

    private boolean hasReachedDailyAppointmentLimit(Customer customer, LocalDateTime appointmentTime) {
        return customer.getAppointments().stream()
                .filter(appointment -> 
                    appointment.getAppointmentTime().toLocalDate().equals(appointmentTime.toLocalDate()) &&
                    appointment.getStatus() == Appointment.AppointmentStatus.SCHEDULED)
                .count() >= MAX_APPOINTMENTS_PER_DAY;
    }

    private void validateCustomerDTO(CustomerDTO dto) {
        if (dto == null) {
            throw new CustomerException("Customer data cannot be null");
        }
        if (!StringUtils.hasText(dto.getName())) {
            throw new CustomerException("Name is required");
        }
        if (!StringUtils.hasText(dto.getEmail())) {
            throw new CustomerException("Email is required");
        }
        if (!StringUtils.hasText(dto.getContactNumber())) {
            throw new CustomerException("Contact number is required");
        }
    }

    private void validateAppointment(Appointment appointment) {
        if (appointment == null) {
            throw new CustomerException("Appointment cannot be null");
        }
        if (appointment.getService() == null) {
            throw new CustomerException("Service is required");
        }
        if (appointment.getAppointmentTime() == null) {
            throw new CustomerException("Appointment time is required");
        }
    }

    private void validateFeedback(Feedback feedback) {
        if (feedback == null) {
            throw new CustomerException("Feedback cannot be null");
        }
        if (feedback.getAppointment() == null) {
            throw new CustomerException("Appointment is required");
        }
        if (feedback.getRating() < 1 || feedback.getRating() > 5) {
            throw new CustomerException("Rating must be between 1 and 5");
        }
    }

    private boolean isValidEmail(String email) {
        return email != null && email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }

    private boolean isValidContactNumber(String contactNumber) {
        return contactNumber != null && contactNumber.matches("^\\+?[1-9]\\d{1,14}$");
    }
} 
=======
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glamify.app.dto.CustomerDTO;
import com.glamify.app.entity.Customer;
import com.glamify.app.repo.CustomerRepo;

@Service
public class CustomerService {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper modelMapper;

    // get Customers
    public List<Customer> getAllCustomers() {
        return customerRepo.getAllCustomers();
    }

    // add Customer
    public CustomerDTO addCustomer(CustomerDTO customerDTO) {
        try {
            Customer customer_res = customerRepo.addCustomer(modelMapper.map(customerDTO,
                    Customer.class));
            return modelMapper.map(customer_res, CustomerDTO.class);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
>>>>>>> 6f0588f11fdf7f66336a8998b8788740ca9aa98e
