package com.glamify.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServiceEntity {
    private int id;
    private String name;
    private String description;
    private String duration;
    private int price;

}
