package com.glamify.app.service;

import com.glamify.app.models.Admin;
import com.glamify.app.repository.AdminRepository;
import com.glamify.app.exception.AdminException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class AdminService {
    private final AdminRepository adminRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public Admin registerAdmin(Admin admin) {
        if (adminRepository.existsByEmail(admin.getEmail())) {
            throw new AdminException("Email already registered");
        }
        admin.setId(UUID.randomUUID().toString());
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        return adminRepository.save(admin);
    }

    public Admin getAdminById(String id) {
        return adminRepository.findById(id)
            .orElseThrow(() -> new AdminException("Admin not found"));
    }

    public Admin updateAdmin(String id, Admin admin) {
        Admin existingAdmin = adminRepository.findById(id)
            .orElseThrow(() -> new AdminException("Admin not found"));

        existingAdmin.setName(admin.getName());
        if (admin.getPassword() != null && !admin.getPassword().isEmpty()) {
            existingAdmin.setPassword(passwordEncoder.encode(admin.getPassword()));
        }
        existingAdmin.setRole(admin.getRole());

        return adminRepository.save(existingAdmin);
    }

    public void deleteAdmin(String id) {
        if (!adminRepository.findById(id).isPresent()) {
            throw new AdminException("Admin not found");
        }
        adminRepository.deleteById(id);
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public List<Admin> searchAdminsByName(String name) {
        return adminRepository.findByNameContaining(name);
    }

    public boolean validatePassword(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }
} 