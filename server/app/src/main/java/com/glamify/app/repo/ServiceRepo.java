package com.glamify.app.repo;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.glamify.app.entity.ServiceEntity;
import com.glamify.app.utils.handlers.admin.ServiceRW;

@Repository
public class ServiceRepo {

    @Autowired
    private ServiceRW serviceRW;

    List<ServiceEntity> service_list = new ArrayList<>();
    AtomicInteger atomInt = new AtomicInteger(0);

    public List<ServiceEntity> getServices() {
        return service_list;
    }

    // Save Service
    public String saveService(ServiceEntity serviceEntity) {
        try {
            serviceEntity.setId(atomInt.getAndIncrement());
            service_list.add(serviceEntity);
            serviceRW.WriteAdmin(service_list);
            return "01";
        } catch (Exception e) {
            return e.toString();
        }
    }

    // Update Service [PUT]
    public ServiceEntity updateServiceByID(int id, ServiceEntity new_ServiceEntity) {
        for (ServiceEntity _service : service_list) {
            if (_service.getId() == id) {
                _service.setName(new_ServiceEntity.getName());
                _service.setDescription(new_ServiceEntity.getDescription());
                _service.setPrice(new_ServiceEntity.getPrice());
                _service.setDuration(new_ServiceEntity.getDuration());

                System.out.println(service_list.toString());
                serviceRW.WriteAdmin(service_list);
                return _service;
            }
        }
        return null;
    }

    // Delete Service
    public ServiceEntity deleteService(int id) {
        for (int i = 0; i < service_list.size(); i++) {
            ServiceEntity _service = service_list.get(i);

            if (_service.getId() == id) {
                service_list.remove(i);
                serviceRW.WriteAdmin(service_list);
                return _service;
            }
        }
        return null;
    }

    public void init_data_from_db() {
        try {

            List<ServiceEntity> init_service = serviceRW.ReadService();
            int maxID = -1;

            for (ServiceEntity _service : init_service) {
                service_list.add(_service);
                if (_service.getId() > maxID) {
                    maxID = _service.getId();
                }
            }
            atomInt.set(++maxID);
            System.out.println("Successfully Loaded Service Data");

        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
}
