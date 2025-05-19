package com.glamify.app.repo;

import com.glamify.app.models.Admin;
import java.util.List;
import java.util.Optional;

<<<<<<< HEAD
public interface AdminRepo {
    Admin save(Admin admin);
    Optional<Admin> findById(String id);
    Optional<Admin> findByEmail(String email);
    List<Admin> findAll();
    void deleteById(String id);
    boolean existsByEmail(String email);
    List<Admin> findByNameContaining(String name);
} 
=======
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
            int maxID = -1;

            for (Admin admin : init_admins) {
                adminList.add(admin);
                if (admin.getId() > maxID) {
                    maxID = admin.getId();
                }
            }
            atomInt.set(++maxID);
            System.out.println("Successfully Loaded Admin Data");

        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }

}
>>>>>>> 6f0588f11fdf7f66336a8998b8788740ca9aa98e
