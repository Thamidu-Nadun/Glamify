package com.glamify.app;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.glamify.app.repo.AdminRepo;
import com.glamify.app.service.AdminService;
import com.glamify.app.utils.handlers.admin.AdminRW;

@SpringBootApplication
public class AppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

	@Bean
	public AdminRepo adminRepo() {
		return new AdminRepo();
	}

	@Bean
	public AdminService adminService() {
		return new AdminService();
	}

	@Bean
	public AdminRW adminRW() {
		return new AdminRW();
	}

}
