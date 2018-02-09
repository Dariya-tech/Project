package io.springBoot.main.Employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import io.springBoot.model.Employee;

import io.springBoot.main.Services.LoginService;

@RequestMapping("/employee")
@RestController
public class EmployeeController {
	@Autowired
	private LoginService loginService;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Employee> getAllEmployee(){
		return loginService.getAllEmployee();
	}
}
