package com.glamify.app;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import com.glamify.app.repo.AdminRepo;
import com.glamify.app.repository.CustomerRepository;
import com.glamify.app.utils.handlers.admin.AdminRW;
import com.glamify.app.utils.handlers.customer.CustomerRW;

@SpringBootApplication
public class AppApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(AppApplication.class, args);

		// Initialize repositories
		AdminRepo adminRepo = context.getBean(AdminRepo.class);
		adminRepo.init_data_from_db();

		CustomerRepository customerRepo = context.getBean(CustomerRepository.class);
		customerRepo.init_data_from_db();
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

	@Bean
	public AdminRW adminRW() {
		return new AdminRW();
	}

	@Bean
	public CustomerRW customerRW() {
		return new CustomerRW();
	}

}
