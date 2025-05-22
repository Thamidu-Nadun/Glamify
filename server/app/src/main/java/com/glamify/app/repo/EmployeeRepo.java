package com.glamify.app.repo;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.glamify.app.entity.Employee;
import com.glamify.app.utils.handlers.admin.EmployeeRW;

@Repository
public class EmployeeRepo {

    @Autowired
    private EmployeeRW employeeRW;

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
        try {
            employeeRW.WriteEmployee(employees);
        } catch (Exception e) {
            System.out.println(e.toString());
        }
        return employee;
    }

    public Employee updateEmployee(int id, Employee employee) {
        for (int i = 0; i < employees.size(); i++) {
            if (employees.get(i).getId() == id) {
                employees.set(i, employee);
                try {
                    employeeRW.WriteEmployee(employees);
                } catch (Exception e) {
                    System.out.println(e.toString());
                }
                return employee;
            }
        }
        return null;
    }

    public Employee deleteEmployee(int id) {
        for (int i = 0; i < employees.size(); i++) {
            try {
                Employee emp = employees.get(i);

                if (emp.getId() == id) {
                    employees.remove(i);
                    try {
                        employeeRW.WriteEmployee(employees);
                    } catch (Exception e) {
                        System.out.println(e.toString());
                    }
                    return emp;
                }
            } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
        return null;
    }

    public void init_data_from_db() {
        try {
            List<Employee> init_employees = employeeRW.ReadEmployee();
            int maxID = -1;

            for (Employee employee : init_employees) {
                employees.add(employee);
                if (employee.getId() > maxID) {
                    maxID = employee.getId();
                }
            }
            atomInt.set(++maxID);
            System.out.println("Successfully Loaded Employee Data");

        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }

}
