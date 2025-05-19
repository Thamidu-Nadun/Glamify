package app.controller;

import app.models.Customer;
import app.service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    private final CustomerService customerService;

    public CustomerController() {
        this.customerService = new CustomerService();
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerCustomer(@RequestBody Map<String, String> request) {
        try {
            Customer customer = customerService.registerCustomer(
                request.get("name"),
                request.get("email"),
                request.get("contactNumber")
            );
            return ResponseEntity.ok(customer);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<Customer>> getAllCustomers() {
        return ResponseEntity.ok(customerService.getAllCustomers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCustomerById(@PathVariable String id) {
        return customerService.getCustomerById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCustomer(
            @PathVariable String id,
            @RequestBody Map<String, String> request) {
        try {
            Customer customer = customerService.updateCustomer(
                id,
                request.get("name"),
                request.get("email"),
                request.get("contactNumber")
            );
            return ResponseEntity.ok(customer);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable String id) {
        try {
            customerService.deleteCustomer(id);
            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Queue operations
    @PostMapping("/queue/{customerId}")
    public ResponseEntity<?> addToQueue(@PathVariable String customerId) {
        try {
            customerService.addCustomerToQueue(customerId);
            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/queue/next")
    public ResponseEntity<?> processNextCustomer() {
        Customer customer = customerService.processNextCustomer();
        if (customer == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(customer);
    }

    @GetMapping("/queue/peek")
    public ResponseEntity<?> peekNextCustomer() {
        Customer customer = customerService.peekNextCustomer();
        if (customer == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(customer);
    }

    @GetMapping("/queue")
    public ResponseEntity<List<Customer>> getQueue() {
        return ResponseEntity.ok(customerService.getQueueAsList());
    }

    @GetMapping("/queue/size")
    public ResponseEntity<Integer> getQueueSize() {
        return ResponseEntity.ok(customerService.getQueueSize());
    }
} 