package com.glamify.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glamify.app.dto.CustomerDTO;
import com.glamify.app.dto.GeneralResDTO;
import com.glamify.app.entity.Customer;
import com.glamify.app.service.CustomerService;
import com.glamify.app.utils.ResponseCode;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping("/getCustomer")
    public ResponseEntity<GeneralResDTO> getCustomer() {
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            List<Customer> customer_res = customerService.getAllCustomers();
            generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
            generalResDTO.setMessage(ResponseCode.SUCCESS.getMessage());
            generalResDTO.setContent(customer_res);

            return new ResponseEntity<>(generalResDTO, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e);

            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getCustomerById/{id}")
    public ResponseEntity<GeneralResDTO> getCustomerById(@RequestParam int id) {
        return null;
    }

    @GetMapping("/getCustomerByEmail/{email}")
    public ResponseEntity<GeneralResDTO> getCustomerByEmail(@RequestParam String email) {
        return null;
    }

    @PostMapping("/saveCustomer")
    public ResponseEntity<GeneralResDTO> saveCustomer(@RequestBody CustomerDTO customer) {
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            CustomerDTO customer_res = customerService.addCustomer(customer);
            System.out.println("Controller: " + customer_res);
            generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
            generalResDTO.setMessage(ResponseCode.SUCCESS.getMessage());
            generalResDTO.setContent(customer_res);

            return new ResponseEntity<>(generalResDTO, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e);

            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateCustomer/{id}")
    public ResponseEntity<GeneralResDTO> updateCustomer(@PathVariable int id, @RequestBody CustomerDTO customer) {
        // Update customer by ID
        return null;
    }

    @DeleteMapping("/deleteCustomer/{id}")
    public ResponseEntity<GeneralResDTO> deleteCustomer(@PathVariable int id) {
        // Delete customer by ID
        return null;
    }

}