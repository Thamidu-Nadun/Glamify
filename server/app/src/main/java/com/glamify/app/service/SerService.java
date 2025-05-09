package com.glamify.app.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glamify.app.dto.service.ServiceDTO;
import com.glamify.app.entity.ServiceEntity;
import com.glamify.app.repo.ServiceRepo;

@Service
public class SerService {

    @Autowired
    ServiceRepo serviceRepo;

    @Autowired
    ModelMapper modelMapper;

    public List<ServiceDTO> getServices() {
        List<ServiceEntity> service_res = serviceRepo.getServices();
        Type serviceListType = new TypeToken<List<ServiceDTO>>() {
        }.getType();
        return modelMapper.map(service_res, serviceListType);
    }

    // save service
    public ServiceDTO saveService(ServiceDTO serviceDTO) {
        try {
            ServiceEntity service = modelMapper.map(serviceDTO, ServiceEntity.class);
            if (serviceRepo.addService(service)) {
                return serviceDTO;
            } else {
                return null;
            }
        } catch (Exception e) {
            return null;
        }
    }
}
