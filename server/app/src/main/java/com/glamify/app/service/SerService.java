package com.glamify.app.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glamify.app.dto.admin.AdminDTO;
import com.glamify.app.dto.service.ServiceDTO;
import com.glamify.app.entity.Admin;
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
            if (serviceRepo.saveService(service) == "01") {
                return modelMapper.map(service, ServiceDTO.class);
            } else {
                return null;
            }
        } catch (Exception e) {
            return null;
        }
    }

    // Update Service [PUT]
    public ServiceDTO updateServiceById(int service_id, ServiceDTO serviceDTO) {
        try {
            ServiceEntity new_service = modelMapper.map(serviceDTO, ServiceEntity.class);

            ServiceEntity updated_service = serviceRepo.updateServiceByID(service_id, new_service);
            if (updated_service != null) {
                return modelMapper.map(updated_service, ServiceDTO.class);
            } else {
                return null;
            }

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // Delete Admin
    public ServiceDTO deleteAdmin(int id) {
        try {
            ServiceEntity deleted_service = serviceRepo.deleteService(id);

            if (deleted_service != null) {
                return modelMapper.map(deleted_service, ServiceDTO.class);
            } else {
                return null;
            }
        } catch (Exception e) {
            return null;
        }
    }
}
