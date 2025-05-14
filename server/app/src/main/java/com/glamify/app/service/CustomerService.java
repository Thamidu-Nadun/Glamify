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