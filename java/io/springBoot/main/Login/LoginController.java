package io.springBoot.main.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.springBoot.main.Services.LoginService;
import io.springBoot.model.Employee;

@RequestMapping("/login")
@RestController
public class LoginController {
	@Autowired
	private LoginService loginService;
	
	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public Employee getEmployee() {
		return loginService.getEmployee();
	}
}
