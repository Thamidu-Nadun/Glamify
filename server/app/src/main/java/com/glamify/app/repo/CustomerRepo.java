package com.glamify.app.repo;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.glamify.app.entity.Appointment;
import com.glamify.app.entity.Customer;
import com.glamify.app.utils.handlers.admin.CustomerRW;

@Repository
public class CustomerRepo {

    @Autowired
    private CustomerRW customerRW;

    List<Customer> customers = new ArrayList<>();
    AtomicInteger atomInt = new AtomicInteger(0);

    public List<Customer> getAllCustomers() {
        return customers;
    }

    public Customer addCustomer(Customer customer) {
        try {
            customer.setId(atomInt.getAndIncrement());
            customers.add(customer);
            customerRW.WriteCustomer(customers);
            return customer;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public Customer getCustomerById(int id) {
        for (Customer customer : customers) {
            if (customer.getId() == id) {
                return customer;
            }
        }
        return null;
    }

    public Customer updateCustomer(int id, Customer new_customer) {
        for (Customer customer : customers) {
            if (customer.getId() == id) {
                customer.setName(new_customer.getName());
                customer.setEmail(new_customer.getEmail());
                customer.setPhone(new_customer.getPhone());

                customerRW.WriteCustomer(customers);
                return customer;
            }
        }
        return null;
    }

    public boolean deleteCustomer(int id) {
        for (int i = 0; i < customers.size(); i++) {
            if (customers.get(i).getId() == id) {
                customers.remove(i);
                customerRW.WriteCustomer(customers);
                return true;
            }
        }
        return false;
    }

    // Add Appointment to Customer
    public void addAppointmentToCustomer(int customerId, Appointment appointment) {
        for (Customer customer : customers) {
            if (customer.getId() == customerId) {
                customer.addAppointment(appointment);
                customerRW.WriteCustomer(customers);
                return;
            }
        }
    }

    // Get Appointments of Customer
    public List<Appointment> getAppointmentsOfCustomer(int customerId) {
        for (Customer customer : customers) {
            if (customer.getId() == customerId) {
                return customer.getAppointments();
            }
        }
        return null;
    }

    // Update Appointment of Customer
    public void updateAppointmentOfCustomer(int customerId, int appointmentIndex, Appointment appointment) {
        for (Customer customer : customers) {
            if (customer.getId() == customerId) {
                customer.updateAppointment(appointmentIndex, appointment);
                customerRW.WriteCustomer(customers);
                return;
            }
        }
    }

    // Remove Appointment from Customer
    public void removeAppointmentFromCustomer(int customerId, Appointment appointment) {
        for (Customer customer : customers) {
            if (customer.getId() == customerId) {
                customer.removeAppointment(appointment);
                customerRW.WriteCustomer(customers);
                return;
            }
        }
    }

    public void init_data_from_db() {
        try {
            List<Customer> init_customers = customerRW.ReadCustomer();
            int maxID = -1;

            for (Customer customer : init_customers) {
                customers.add(customer);
                if (customer.getId() > maxID) {
                    maxID = customer.getId();
                }
            }
            atomInt.set(++maxID);
            System.out.println("Successfully Loaded Customer Data");

        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }

}
