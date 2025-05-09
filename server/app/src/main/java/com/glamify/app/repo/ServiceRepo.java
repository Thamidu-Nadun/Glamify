package com.glamify.app.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.glamify.app.entity.ServiceEntity;

@Repository
public class ServiceRepo {
    List<ServiceEntity> services = new ArrayList<>();

    public List<ServiceEntity> getServices() {
        return services;
    }

    public boolean addService(ServiceEntity service) {
        try {
            if (services.add(service)) {
                return true;
            } else {
                return false;
            }

        } catch (Exception e) {
            return false;
        }
    }
}
