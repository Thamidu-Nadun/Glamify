package com.glamify.app.repository;

import com.glamify.app.models.Admin;
import com.glamify.app.utils.JsonFileStorage;
import com.google.gson.reflect.TypeToken;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class AdminRepository {
    private final JsonFileStorage<Admin> storage;
    private static final String ADMINS_FILE = "data/admins.json";

    public AdminRepository() {
        this.storage = new JsonFileStorage<>(ADMINS_FILE, new TypeToken<List<Admin>>() {});
    }

    public Admin save(Admin admin) {
        List<Admin> admins = storage.readFromFile();
        
        // If admin exists, update it
        Optional<Admin> existingAdmin = admins.stream()
                .filter(a -> a.getId().equals(admin.getId()))
                .findFirst();
        
        if (existingAdmin.isPresent()) {
            admins = admins.stream()
                    .map(a -> a.getId().equals(admin.getId()) ? admin : a)
                    .collect(Collectors.toList());
        } else {
            admins.add(admin);
        }
        
        storage.writeToFile(admins);
        return admin;
    }

    public Optional<Admin> findById(String id) {
        return storage.readFromFile().stream()
                .filter(admin -> admin.getId().equals(id))
                .findFirst();
    }

    public Optional<Admin> findByEmail(String email) {
        return storage.readFromFile().stream()
                .filter(admin -> admin.getEmail().equals(email))
                .findFirst();
    }

    public List<Admin> findAll() {
        return storage.readFromFile();
    }

    public void deleteById(String id) {
        List<Admin> admins = storage.readFromFile();
        admins.removeIf(admin -> admin.getId().equals(id));
        storage.writeToFile(admins);
    }

    public boolean existsByEmail(String email) {
        return storage.readFromFile().stream()
                .anyMatch(admin -> admin.getEmail().equals(email));
    }

    public List<Admin> findByNameContaining(String name) {
        String searchName = name.toLowerCase();
        return storage.readFromFile().stream()
                .filter(admin -> admin.getName().toLowerCase().contains(searchName))
                .collect(Collectors.toList());
    }
} 