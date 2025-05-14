package com.glamify.app.dto;

import java.util.List;

import com.glamify.app.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDTO extends User {
    private int phone;
    private List<AppointmentDTO> appointments;
}