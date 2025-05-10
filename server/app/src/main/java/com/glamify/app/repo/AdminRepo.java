package com.glamify.app.repo;

import com.glamify.app.models.Admin;
import java.util.List;
import java.util.Optional;

public interface AdminRepo {
    Admin save(Admin admin);
    Optional<Admin> findById(String id);
    Optional<Admin> findByEmail(String email);
    List<Admin> findAll();
    void deleteById(String id);
    boolean existsByEmail(String email);
    List<Admin> findByNameContaining(String name);
} 