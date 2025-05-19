package com.glamify.app;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import com.glamify.app.repo.AdminRepo;
<<<<<<< HEAD
import com.glamify.app.repository.CustomerRepository;
import com.glamify.app.utils.handlers.admin.AdminRW;
import com.glamify.app.utils.handlers.customer.CustomerRW;
=======
import com.glamify.app.repo.ServiceRepo;
import com.glamify.app.utils.handlers.admin.AdminRW;
import com.glamify.app.utils.handlers.admin.CustomerRW;
import com.glamify.app.utils.handlers.admin.ServiceRW;
>>>>>>> 6f0588f11fdf7f66336a8998b8788740ca9aa98e

@SpringBootApplication
public class AppApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(AppApplication.class, args);

		// Initialize repositories
		AdminRepo adminRepo = context.getBean(AdminRepo.class);
		adminRepo.init_data_from_db();

<<<<<<< HEAD
		CustomerRepository customerRepo = context.getBean(CustomerRepository.class);
		customerRepo.init_data_from_db();
=======
		ServiceRepo serviceRepo = context.getBean(ServiceRepo.class);
		serviceRepo.init_data_from_db();
>>>>>>> 6f0588f11fdf7f66336a8998b8788740ca9aa98e
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
<<<<<<< HEAD
=======
	public ServiceRW serviceRW() {
		return new ServiceRW();
	}

	@Bean
>>>>>>> 6f0588f11fdf7f66336a8998b8788740ca9aa98e
	public CustomerRW customerRW() {
		return new CustomerRW();
	}

}
