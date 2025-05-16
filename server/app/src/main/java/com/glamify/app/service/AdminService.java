package com.glamify.app.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glamify.app.dto.admin.AdminDTO;
import com.glamify.app.entity.Admin;
import com.glamify.app.entity.Appointment;
import com.glamify.app.repo.AdminRepo;
import com.glamify.app.utils.SortAppointments;

@Service
public class AdminService {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private SortAppointments sortAppointments;

    // Get Admins
    public List<AdminDTO> getAllAdmins() {
        try {
            List<Admin> adminList = adminRepo.getAllAdmins();
            Type adminType = new TypeToken<List<AdminDTO>>() {
            }.getType();
            return modelMapper.map(adminList, adminType);
        } catch (Exception e) {
            return null;
        }
    }

    // Get Admin by ID
    public AdminDTO getAdminByID(int id) {
        try {
            Admin admin = adminRepo.getAdminByID(id);
            return modelMapper.map(admin, AdminDTO.class);
        } catch (Exception e) {
            return null;
        }
    }

    // Get Admin by Email
    public AdminDTO getAdminByEmail(String email) {
        try {
            Admin admin = adminRepo.getAdminByEmail(email);
            return modelMapper.map(admin, AdminDTO.class);
        } catch (Exception e) {
            return null;
        }
    }

    // Save Admin
    public AdminDTO saveAdmin(AdminDTO adminDTO) {
        try {
            Admin admin = modelMapper.map(adminDTO, Admin.class);
            if (adminRepo.saveAdmin(admin) == "01") {
                return modelMapper.map(admin, AdminDTO.class);
            } else {
                return null;
            }
        } catch (Exception e) {
            return null;
        }
    }

    // Update Admin [PUT]
    public AdminDTO updateAdminById(int admin_id, AdminDTO adminDTO) {
        try {
            Admin new_admin = modelMapper.map(adminDTO, Admin.class);

            Admin updated_admin = adminRepo.updateAdminByID(admin_id, new_admin);
            if (updated_admin != null) {
                return modelMapper.map(updated_admin, AdminDTO.class);
            } else {
                return null;
            }

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // Delete Admin
    public AdminDTO deleteAdmin(int id) {
        try {
            Admin deleted_admin = adminRepo.deleteAdmin(id);

            if (deleted_admin != null) {
                return modelMapper.map(deleted_admin, AdminDTO.class);
            } else {
                return null;
            }
        } catch (Exception e) {
            return null;
        }
    }

    // Get Sorted Appointment
    public List<Appointment> getSortedAppointments(List<Appointment> appointments) {
        // TODO: Implement Sort
        return sortAppointments.quick_sort(appointments);
    }

}
