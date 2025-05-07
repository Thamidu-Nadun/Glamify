package com.glamify.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glamify.app.dto.admin.AdminDTO;
import com.glamify.app.dto.admin.AdminResDTO;
import com.glamify.app.service.AdminService;
import com.glamify.app.utils.ResponseCode;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/getAdmin")
    public ResponseEntity<AdminResDTO> getAdmin() {
        // Response Object
        AdminResDTO adminResDTO = new AdminResDTO();

        List<AdminDTO> admins = adminService.getAllAdmins();
        adminResDTO.setCode(ResponseCode.ACCEPTED.getCode());
        adminResDTO.setMessage(ResponseCode.ACCEPTED.getMessage());
        adminResDTO.setContent(admins);

        return new ResponseEntity<AdminResDTO>(adminResDTO, HttpStatus.OK);

    }

    @GetMapping("/getAdmin/{id}")
    public ResponseEntity<AdminResDTO> getMethodName(@PathVariable("id") int id) {
        // Response Object
        AdminResDTO adminResDTO = new AdminResDTO();
        try {
            AdminDTO admin = adminService.getAdminByID(id);
            if (admin != null) {
                adminResDTO.setCode(ResponseCode.FOUND_CONTENT.getCode());
                adminResDTO.setMessage(ResponseCode.FOUND_CONTENT.getMessage());
            } else {
                adminResDTO.setCode(ResponseCode.NOT_FOUND.getCode());
                adminResDTO.setMessage(ResponseCode.NOT_FOUND.getMessage());
            }
            adminResDTO.setContent(admin);
        } catch (Exception e) {
            adminResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            adminResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            adminResDTO.setContent(e);
        }
        return new ResponseEntity<AdminResDTO>(adminResDTO, HttpStatus.ACCEPTED);
    }

    @GetMapping("/getAdminByEmail")
    public ResponseEntity<AdminResDTO> getAdminByEmail(@RequestBody AdminDTO admin) {
        // Response Object
        AdminResDTO adminResDTO = new AdminResDTO();

        String email = admin.getEmail();
        try {
            AdminDTO adminRes = adminService.getAdminByEmail(email);
            if (adminRes != null) {
                adminResDTO.setCode(ResponseCode.FOUND_CONTENT.getCode());
                adminResDTO.setMessage(ResponseCode.FOUND_CONTENT.getMessage());
            } else {
                adminResDTO.setCode(ResponseCode.NOT_FOUND.getCode());
                adminResDTO.setMessage(ResponseCode.NOT_FOUND.getMessage());
            }
            adminResDTO.setContent(adminRes);
        } catch (Exception e) {
            adminResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            adminResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            adminResDTO.setContent(e);
        }
        return new ResponseEntity<AdminResDTO>(adminResDTO, HttpStatus.ACCEPTED);
    }

    @PostMapping("/saveAdmin")
    public ResponseEntity<AdminResDTO> saveAdmin(@RequestBody AdminDTO adminDTO) {
        // Response Object
        AdminResDTO adminResDTO = new AdminResDTO();

        AdminDTO admin = adminService.saveAdmin(adminDTO);

        adminResDTO.setCode(ResponseCode.CREATED.getCode());
        adminResDTO.setMessage(ResponseCode.CREATED.getMessage());
        adminResDTO.setContent(admin);

        return new ResponseEntity<AdminResDTO>(adminResDTO, HttpStatus.CREATED);
    }

    @PutMapping("/updateAdmin/{id}")
    public ResponseEntity<AdminResDTO> updateAdminById(@PathVariable int id, @RequestBody AdminDTO adminDTO) {
        // Response Object
        AdminResDTO adminResDTO = new AdminResDTO();
        if (id >= 0) {
            try {
                AdminDTO updatedAdmin = adminService.updateAdminById(id, adminDTO);
                if (updatedAdmin != null) {
                    adminResDTO.setCode(ResponseCode.SUCCESS.getCode());
                    adminResDTO.setMessage(ResponseCode.SUCCESS.getMessage());
                    adminResDTO.setContent(updatedAdmin);

                    return new ResponseEntity<>(adminResDTO, HttpStatus.CREATED);
                } else {
                    adminResDTO.setCode(ResponseCode.NOT_FOUND.getCode());
                    adminResDTO.setMessage(ResponseCode.NOT_FOUND.getMessage());
                    adminResDTO.setContent(adminDTO);

                    return new ResponseEntity<>(adminResDTO, HttpStatus.NOT_ACCEPTABLE);
                }
            } catch (Exception e) {
                adminResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
                adminResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
                adminResDTO.setContent(e);

                return new ResponseEntity<>(adminResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            adminResDTO.setCode(ResponseCode.BAD_REQUEST.getCode());
            adminResDTO.setMessage(ResponseCode.BAD_REQUEST.getMessage());
            adminResDTO.setMessage("Please Provide a vail id");

            return new ResponseEntity<>(adminResDTO, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @DeleteMapping("/deleteAdmin/{id}")
    public ResponseEntity<AdminResDTO> deleteAdminById(@PathVariable int id) {
        // Response Object
        AdminResDTO adminResDTO = new AdminResDTO();
        try {
            AdminDTO deleted_admin_res = adminService.deleteAdmin(id);
            adminResDTO.setCode(ResponseCode.NO_CONTENT.getCode());
            adminResDTO.setMessage(ResponseCode.NO_CONTENT.getMessage());
            adminResDTO.setContent(deleted_admin_res);

            return new ResponseEntity<>(adminResDTO, HttpStatus.OK);
        } catch (Exception e) {
            adminResDTO.setCode(ResponseCode.INTERNAL_SERVER_ERROR.getCode());
            adminResDTO.setMessage(ResponseCode.INTERNAL_SERVER_ERROR.getMessage());
            adminResDTO.setContent(e);

            return new ResponseEntity<>(adminResDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
