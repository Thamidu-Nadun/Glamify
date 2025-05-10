package com.glamify.app.repo;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.glamify.app.entity.Admin;
import com.glamify.app.utils.handlers.admin.AdminRW;

@Repository
public class AdminRepo {

    @Autowired
    private AdminRW adminRW;

    List<Admin> adminList = new ArrayList<>();
    AtomicInteger atomInt = new AtomicInteger(0);

    // Get Admins
    public List<Admin> getAllAdmins() {
        return adminList;
    }

    // Get Admin by ID
    public Admin getAdminByID(int id) {
        for (Admin admin : adminList) {
            if (admin.getId() == id) {
                return admin;
            }
        }
        return null;
    }

    // Get Admin by Email
    public Admin getAdminByEmail(String email) {
        for (Admin admin : adminList) {
            if (admin.getEmail().equals(email)) {
                return admin;
            }
        }
        return null;
    }

    // Save Admin
    public String saveAdmin(Admin admin) {
        try {
            admin.setId(atomInt.getAndIncrement());
            adminList.add(admin);
            adminRW.WriteAdmin(adminList);
            return "01";
        } catch (Exception e) {
            return e.toString();
        }
    }

    // Update Admin [PUT]
    public Admin updateAdminByID(int id, Admin new_admin) {
        for (Admin admin : adminList) {
            if (admin.getId() == id) {
                admin.setName(new_admin.getName());
                admin.setEmail(new_admin.getEmail());
                admin.setPassword(new_admin.getPassword());
                admin.setRole(new_admin.getRole());

                System.out.println(adminList.toString());
                adminRW.WriteAdmin(adminList);
                return admin;
            }
        }
        return null;
    }

    // Delete Admin
    public Admin deleteAdmin(int id) {
        for (int i = 0; i < adminList.size(); i++) {
            Admin admin = adminList.get(i);

            if (admin.getId() == id) {
                adminList.remove(i);
                adminRW.WriteAdmin(adminList);
                return admin;
            }
        }
        return null;
    }

    public void init_data_from_db() {
        try {
            List<Admin> init_admins = adminRW.ReadAdmin();
            if (adminList.addAll(init_admins)) {
                System.out.println("Successfully Loaded Data");
            } else {
                System.out.println("Couldn't Load Data");
            }
        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }

}
