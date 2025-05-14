package com.glamify.app.repo;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.stereotype.Repository;

import com.glamify.app.entity.Employee;

@Repository
public class EmployeeRepo {

    private List<Employee> employees = new ArrayList<>();
    AtomicInteger atomInt = new AtomicInteger(0);

    public List<Employee> getEmployees() {
        return employees;
    }

    public Employee getEmployeeById(int id) {
        for (Employee employee : employees) {
            if (employee.getId() == id) {
                return employee;
            }
        }
        return null;
    }

    public Employee getEmployeeByName(String name) {
        for (Employee employee : employees) {
            if (employee.getName().equalsIgnoreCase(name)) {
                return employee;
            }
        }
        return null;
    }

    public Employee getEmployeeByEmail(String email) {
        for (Employee employee : employees) {
            if (employee.getEmail().equalsIgnoreCase(email)) {
                return employee;
            }
        }
        return null;
    }

    public Employee saveEmployee(Employee employee) {
        employee.setId(atomInt.getAndIncrement());
        employees.add(employee);
        return employee;
    }

    public Employee updateEmployee(int id, Employee employee) {
        for (int i = 0; i < employees.size(); i++) {
            if (employees.get(i).getId() == id) {
                employees.set(i, employee);
                return employee;
            }
        }
        return null;
    }

    public Employee deleteEmployee(int id) {
        for (int i = 0; i < employees.size(); i++) {
            Employee emp = employees.get(i);

            if (emp.getId() == id) {
                employees.remove(i);
                return emp;
            }
        }
        return null;
    }

}
