package com.glamify.app;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import com.glamify.app.repo.AdminRepo;
import com.glamify.app.repo.AppointmentRepo;
import com.glamify.app.repo.CustomerRepo;
import com.glamify.app.repo.ServiceRepo;
import com.glamify.app.utils.SortAppointments;
import com.glamify.app.utils.handlers.admin.AdminRW;
import com.glamify.app.utils.handlers.admin.AppointmentRW;
import com.glamify.app.utils.handlers.admin.CustomerRW;
import com.glamify.app.utils.handlers.admin.ServiceRW;

@SpringBootApplication
public class AppApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(AppApplication.class, args);

		AdminRepo adminRepo = context.getBean(AdminRepo.class);
		adminRepo.init_data_from_db();

		ServiceRepo serviceRepo = context.getBean(ServiceRepo.class);
		serviceRepo.init_data_from_db();

		CustomerRepo customerRepo = context.getBean(CustomerRepo.class);
		customerRepo.init_data_from_db();

		AppointmentRepo appointmentRepo = context.getBean(AppointmentRepo.class);
		appointmentRepo.init_data_from_db();
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

	@Bean
	public CustomerRW customerRW() {
		return new CustomerRW();
	}

	@Bean
	public AppointmentRW appointmentRW() {
		return new AppointmentRW();
	}

	@Bean
	public SortAppointments sortAppointments() {
		return new SortAppointments();
	}
}
