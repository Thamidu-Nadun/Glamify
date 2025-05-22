package com.glamify.app.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glamify.app.dto.EmployeeDTO;
import com.glamify.app.entity.Employee;
import com.glamify.app.repo.EmployeeRepo;
import com.google.gson.reflect.TypeToken;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<EmployeeDTO> getEmployees() {
        Type employeeListType = new TypeToken<List<EmployeeDTO>>() {
        }.getType();
        return modelMapper.map(employeeRepo.getEmployees(), employeeListType);
    }

    public EmployeeDTO getEmployeeById(int id) {
        Employee emp = employeeRepo.getEmployeeById(id);
        if (emp == null) {
            return null;
        }
        return modelMapper.map(emp, EmployeeDTO.class);
    }

    public EmployeeDTO getEmployeeByName(String name) {
        Employee emp = employeeRepo.getEmployeeByName(name);
        if (emp == null) {
            return null;
        }
        return modelMapper.map(emp, EmployeeDTO.class);
    }

    public EmployeeDTO getEmployeeByEmail(String email) {
        Employee emp = employeeRepo.getEmployeeByEmail(email);
        if (emp == null) {
            return null;
        }
        return modelMapper.map(emp, EmployeeDTO.class);
    }

    public EmployeeDTO saveEmployee(EmployeeDTO employeeDTO) {
        Employee emp = modelMapper.map(employeeDTO, Employee.class);
        emp = employeeRepo.saveEmployee(emp);
        return modelMapper.map(emp, EmployeeDTO.class);
    }

    public EmployeeDTO updateEmployee(int id, EmployeeDTO employeeDTO) {
        Employee emp = modelMapper.map(employeeDTO, Employee.class);
        emp = employeeRepo.updateEmployee(id, emp);
        return modelMapper.map(emp, EmployeeDTO.class);
    }

    public EmployeeDTO deleteEmployee(int id) {
        Employee emp_res = employeeRepo.deleteEmployee(id);
        if (emp_res == null) {
            return null;
        }
        return modelMapper.map(emp_res, EmployeeDTO.class);
    }
}
