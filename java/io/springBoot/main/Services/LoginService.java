package io.springBoot.main.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import io.springBoot.model.Employee;

@Service
public class LoginService {
	public Employee getEmployee(){
		Employee emp = new Employee(1, "First", "Ui", "Ui");
		return emp;
	}
	public Employee getLogin(Employee employee) {
		Employee emp = new Employee(1, "First", "Ui", "Ui");
		emp.setPassword(null);
		return emp;
	}
	
	public void AddEmployee(Employee employee) {
		
	}
	
	
	public List<Employee>getAllEmployee() {
		List<Employee> emps = new ArrayList<Employee>();
		return emps;
	}
}
