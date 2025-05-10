package com.glamify.app;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import com.glamify.app.repo.AdminRepo;
import com.glamify.app.repo.ServiceRepo;
import com.glamify.app.utils.handlers.admin.AdminRW;
import com.glamify.app.utils.handlers.admin.ServiceRW;

@SpringBootApplication
public class AppApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(AppApplication.class, args);

		AdminRepo adminRepo = context.getBean(AdminRepo.class);
		adminRepo.init_data_from_db();

		ServiceRepo serviceRepo = context.getBean(ServiceRepo.class);
		serviceRepo.init_data_from_db();
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
	public ServiceRW serviceRW() {
		return new ServiceRW();
	}

}
