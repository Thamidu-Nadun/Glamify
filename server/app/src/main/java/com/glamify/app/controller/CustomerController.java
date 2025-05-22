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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin
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

    @GetMapping("/getCustomerByEmail")
    public ResponseEntity<GeneralResDTO> getCustomerByEmail(@RequestParam String email) {
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            Customer customer_res = customerService.getCustomerByEmail(email);
            if (customer_res != null) {
                generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
                generalResDTO.setMessage(ResponseCode.SUCCESS.getMessage());
                generalResDTO.setContent(customer_res);

                return new ResponseEntity<>(generalResDTO, HttpStatus.ACCEPTED);
            } else {
                generalResDTO.setCode(ResponseCode.NOT_FOUND.getCode());
                generalResDTO.setMessage("Customer not found.");
                generalResDTO.setContent(null);

                return new ResponseEntity<>(generalResDTO, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e);

            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
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

    @GetMapping("/login")
    public ResponseEntity<GeneralResDTO> loginCustomer(@RequestParam String email, @RequestParam String password) {
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            boolean isValid = customerService.validateLogin(email, password);
            if (isValid) {
                generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
                generalResDTO.setMessage("Login successful.");
                generalResDTO.setContent(true);
                return new ResponseEntity<>(generalResDTO, HttpStatus.OK);
            } else {
                generalResDTO.setCode(ResponseCode.UNAUTHORIZED.getCode());
                generalResDTO.setMessage("Invalid email or password.");
                generalResDTO.setContent(false);
                return new ResponseEntity<>(generalResDTO, HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e.getMessage());
            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateCustomer/{id}")
    public ResponseEntity<GeneralResDTO> updateCustomer(@PathVariable int id, @RequestBody CustomerDTO customer) {
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            CustomerDTO updatedCustomer = customerService.updateCustomer(id, customer);
            generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
            generalResDTO.setMessage("Customer updated successfully.");
            generalResDTO.setContent(updatedCustomer);

            return new ResponseEntity<>(generalResDTO, HttpStatus.OK);
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e.getMessage());

            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteCustomer/{id}")
    public ResponseEntity<GeneralResDTO> deleteCustomer(@PathVariable int id) {
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            boolean deleted = customerService.deleteCustomer(id);
            if (deleted) {
                generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
                generalResDTO.setMessage("Customer deleted successfully.");
                generalResDTO.setContent(null);

                return new ResponseEntity<>(generalResDTO, HttpStatus.OK);
            } else {
                generalResDTO.setCode(ResponseCode.NOT_FOUND.getCode());
                generalResDTO.setMessage("Customer not found.");
                generalResDTO.setContent(null);

                return new ResponseEntity<>(generalResDTO, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e.getMessage());

            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}