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

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

}
