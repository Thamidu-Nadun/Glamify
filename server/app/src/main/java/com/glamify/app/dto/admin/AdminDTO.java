package com.glamify.app.dto.admin;

import com.glamify.app.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminDTO extends User {
    private String role;
}
