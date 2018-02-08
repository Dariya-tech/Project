package io.springBoot.main.Services;

import org.springframework.stereotype.Service;

import io.springBoot.model.Employee;

@Service
public class LoginService {
	public Employee getEmployee(){
		Employee emp = new Employee(1, "First", "Ui", "Ui");
		return emp;
	}
}
