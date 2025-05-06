package com.glamify.service;

import com.glamify.model.Customer;
import com.glamify.utils.JsonDBUtil;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public class CustomerService {

    public List<Customer> getAllCustomers() throws IOException {
        return JsonDBUtil.loadCustomers();
    }

    public void registerCustomer(Customer customer) throws IOException {
        List<Customer> customers = JsonDBUtil.loadCustomers();
        customer.setId(UUID.randomUUID().toString());
        customers.add(customer);
        JsonDBUtil.saveCustomers(customers);
    }

    public Customer getCustomerById(String id) throws IOException {
        return JsonDBUtil.loadCustomers().stream()
            .filter(c -> c.getId().equals(id))
            .findFirst()
            .orElse(null);
    }

    public void updateCustomer(Customer updated) throws IOException {
        List<Customer> customers = JsonDBUtil.loadCustomers();
        for (int i = 0; i < customers.size(); i++) {
            if (customers.get(i).getId().equals(updated.getId())) {
                customers.set(i, updated);
                break;
            }
        }
        JsonDBUtil.saveCustomers(customers);
    }

    public void bookAppointment(String customerId, String appointmentId) throws IOException {
        Customer customer = getCustomerById(customerId);
        if (customer != null) {
            customer.getBookings().add(appointmentId);
            updateCustomer(customer);
        }
    }

    public void cancelAppointment(String customerId, String appointmentId) throws IOException {
        Customer customer = getCustomerById(customerId);
        if (customer != null && customer.getBookings().contains(appointmentId)) {
            customer.getBookings().remove(appointmentId);
            updateCustomer(customer);
        }
    }
}
