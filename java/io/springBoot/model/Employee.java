package io.springBoot.model;


public class Employee {
	private int Id;
	private String userName;
	private String password;
	private String role;
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public Employee(int id, String userName, String password, String role) {
		super();
		Id = id;
		this.userName = userName;
		this.password = password;
		this.role = role;
	}
	public Employee() {
		
	}
	
}
