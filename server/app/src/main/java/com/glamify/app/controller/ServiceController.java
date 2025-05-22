package com.glamify.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glamify.app.dto.GeneralResDTO;
import com.glamify.app.dto.service.ServiceDTO;
import com.glamify.app.service.SerService;
import com.glamify.app.utils.ResponseCode;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/services")
public class ServiceController {

    @Autowired
    SerService SerService;

    // Get Services
    @GetMapping("/getServices")
    public ResponseEntity<GeneralResDTO> getServices() {
        GeneralResDTO res = new GeneralResDTO();
        try {
            List<ServiceDTO> services = SerService.getServices();

            res.setCode(ResponseCode.SUCCESS.getCode());
            res.setMessage(ResponseCode.SUCCESS.getMessage());
            res.setContent(services);

            return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            res.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            res.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            res.setContent(null);

            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/saveService")
    public ResponseEntity<GeneralResDTO> saveService(@RequestBody ServiceDTO serviceDTO) {
        GeneralResDTO res = new GeneralResDTO();

        try {
            ServiceDTO service_res = SerService.saveService(serviceDTO);
            res.setCode(ResponseCode.CREATED.getCode());
            res.setMessage(ResponseCode.CREATED.getMessage());
            res.setContent(service_res);

            return new ResponseEntity<>(res, HttpStatus.CREATED);
        } catch (Exception e) {
            res.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            res.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            res.setContent(null);

            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateService/{id}")
    public ResponseEntity<GeneralResDTO> updateServiceById(@PathVariable int id, @RequestBody ServiceDTO serviceDTO) {
        // Response Object
        GeneralResDTO generalResDTO = new GeneralResDTO();
        if (id >= 0) {
            try {
                ServiceDTO updatedService = SerService.updateServiceById(id, serviceDTO);
                if (updatedService != null) {
                    generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
                    generalResDTO.setMessage(ResponseCode.SUCCESS.getMessage());
                    generalResDTO.setContent(updatedService);

                    return new ResponseEntity<>(generalResDTO, HttpStatus.CREATED);
                } else {
                    generalResDTO.setCode(ResponseCode.NOT_FOUND.getCode());
                    generalResDTO.setMessage(ResponseCode.NOT_FOUND.getMessage());
                    generalResDTO.setContent(serviceDTO);

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

    @DeleteMapping("/deleteService/{id}")
    public ResponseEntity<GeneralResDTO> deleteAdminById(@PathVariable int id) {
        // Response Object
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            ServiceDTO deleted_service_res = SerService.deleteAdmin(id);
            generalResDTO.setCode(ResponseCode.NO_CONTENT.getCode());
            generalResDTO.setMessage(ResponseCode.NO_CONTENT.getMessage());
            generalResDTO.setContent(deleted_service_res);

            return new ResponseEntity<>(generalResDTO, HttpStatus.OK);
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e);

            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
