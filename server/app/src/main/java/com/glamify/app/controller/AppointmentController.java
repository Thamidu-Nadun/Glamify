package com.glamify.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glamify.app.dto.GeneralResDTO;
import com.glamify.app.entity.Appointment;
import com.glamify.app.service.AppointmentService;
import com.glamify.app.utils.ResponseCode;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/getAppointments")
    public ResponseEntity<GeneralResDTO> getAppointments() {
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            List<Appointment> appointments = appointmentService.getAllAppointments();
            generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
            generalResDTO.setMessage(ResponseCode.SUCCESS.getMessage());
            generalResDTO.setContent(appointments);
            return new ResponseEntity<>(generalResDTO, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e);

            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/saveAppointment")
    public ResponseEntity<GeneralResDTO> saveAppointment(@RequestBody Appointment appointment) {
        GeneralResDTO generalResDTO = new GeneralResDTO();
        try {
            Appointment appointment_res = appointmentService.addAppointment(appointment);
            generalResDTO.setCode(ResponseCode.SUCCESS.getCode());
            generalResDTO.setMessage(ResponseCode.SUCCESS.getMessage());
            generalResDTO.setContent(appointment_res);

            return new ResponseEntity<>(generalResDTO, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            generalResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            generalResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            generalResDTO.setContent(e);

            return new ResponseEntity<>(generalResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
