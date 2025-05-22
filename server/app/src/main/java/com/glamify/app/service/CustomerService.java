package com.glamify.app.service;

import java.util.List;

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


    public boolean validateLogin(String email, String password) {
        Customer customer = customerRepo.getCustomerByEmail(email);
        if (customer != null && customer.getPassword().equals(password)) {
            return true;
        }
        return false;
    }

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

    // update Customer
    public CustomerDTO updateCustomer(int id, CustomerDTO customerDTO) {
        try {
            // Map DTO to a Customer entity
            Customer newCustomerData = modelMapper.map(customerDTO, Customer.class);
            Customer updatedCustomer = customerRepo.updateCustomer(id, newCustomerData);

            if (updatedCustomer == null) {
                return null; // Customer not found
            }

            return modelMapper.map(updatedCustomer, CustomerDTO.class);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // delete Customer
    public boolean deleteCustomer(int id) {
        try {
            return customerRepo.deleteCustomer(id);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}