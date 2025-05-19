package com.glamify.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glamify.app.dto.EmployeeDTO;
import com.glamify.app.dto.GeneralResDTO;
import com.glamify.app.service.EmployeeService;
import com.glamify.app.utils.ResponseCode;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/getEmployees")
    public ResponseEntity<GeneralResDTO> getEmployees() {
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            List<EmployeeDTO> emp_res = employeeService.getEmployees();
            generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
            generalResDTO.setMessage(ResponseCode.SUCCESS.getMessage());
            generalResDTO.setContent(emp_res);

            return new ResponseEntity<>(generalResDTO, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e);

            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/saveEmployee")
    public ResponseEntity<GeneralResDTO> postMethodName(@RequestBody EmployeeDTO employeeDTO) {
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            EmployeeDTO emp_res = employeeService.saveEmployee(employeeDTO);
            generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
            generalResDTO.setMessage(ResponseCode.SUCCESS.getMessage());
            generalResDTO.setContent(emp_res);

            return new ResponseEntity<>(generalResDTO, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e);

            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("updateEmployee/{id}")
    public ResponseEntity<GeneralResDTO> putMethodName(@PathVariable int id, @RequestBody EmployeeDTO employeeDTO) {
        // Response Object
        GeneralResDTO generalResDTO = new GeneralResDTO();
        if (id >= 0) {
            try {
                EmployeeDTO updatedEmployee = employeeService.updateEmployee(id, employeeDTO);
                if (updatedEmployee != null) {
                    generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
                    generalResDTO.setMessage(ResponseCode.SUCCESS.getMessage());
                    generalResDTO.setContent(updatedEmployee);

                    return new ResponseEntity<>(generalResDTO, HttpStatus.CREATED);
                } else {
                    generalResDTO.setCode(ResponseCode.NOT_FOUND.getCode());
                    generalResDTO.setMessage(ResponseCode.NOT_FOUND.getMessage());
                    generalResDTO.setContent(employeeDTO);

                    return new ResponseEntity<>(generalResDTO, HttpStatus.NOT_ACCEPTABLE);
                }
            } catch (Exception e) {
                generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
                generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
                generalResDTO.setContent(e);

                return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            generalResDTO.setCode(ResponseCode.BAD_REQUEST.getCode());
            generalResDTO.setMessage(ResponseCode.BAD_REQUEST.getMessage());
            generalResDTO.setMessage("Please Provide a vail id");

            return new ResponseEntity<>(generalResDTO, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @DeleteMapping("/deleteEmployee/{id}")
    public ResponseEntity<GeneralResDTO> deleteAdminById(@PathVariable int id) {
        // Response Object
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            EmployeeDTO deleted_emp = employeeService.deleteEmployee(id);
            generalResDTO.setCode(ResponseCode.NO_CONTENT.getCode());
            generalResDTO.setMessage(ResponseCode.NO_CONTENT.getMessage());
            generalResDTO.setContent(deleted_emp);

            return new ResponseEntity<>(generalResDTO, HttpStatus.OK);
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e);

            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
