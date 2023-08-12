package com.ipm.api;

import org.junit.jupiter.api.Test;

import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.ipm.api.customer.*;
import com.ipm.api.admin.*;

@SpringBootTest
class InsurencePolicyManagementApplicationTests {
	@Autowired
	private CustomerRepo userRepository;
	@Autowired
	private AdminRepo adminRepository;



	// Testing with Customer
	// Creating a customer
	@Test
	public void addCustomer() {
		Customer user = new Customer();
//		user.setCid((long) 2);
		user.setCname("kishore");
		user.setCphno("1234567890");
		user.setCpassword("123456");
		user.setCemail("kishore2@gmail");
		user.setCage("23");
		user.setCgender("male");
		user.setCaddress("India");
		userRepository.save(user);
	}

	// List of Customers
	@Test
	public void customers() {
		List<Customer> list = userRepository.findAll();
		System.out.println("\n  | List of the Customers | \n");
		list.forEach(System.out::println);
		assertThat(list).size().isGreaterThan(0);
		System.out.println("\n");
		assertThat(list).size().isGreaterThan(0);
	}

	// customer details update
	@Test
	public void updateCustomer() {
		Customer user = userRepository.findById((long) 7).get();
		user.setCname("Kishore");
		user.setCemail("kishore123@gmail.com");
		user.setCpassword("1234");
		user.setCphno("1234567890");
		userRepository.save(user);
		assertNotEquals("kishore@gmail", userRepository.findById((long) 7).get().getCemail());
		assertNotEquals("123456", userRepository.findById((long) 7).get().getCpassword());
		assertNotEquals("9876543219", userRepository.findById((long) 7).get().getCphno());
	}

	// Get user by id
	@Test
	public void getUserbn() {
		Customer user = userRepository.findById((long) 5).get();
		assertEquals("Kishore", user.getCname());
		System.out.println("\n" + user);
	}

	// End of user testing

	
	

	// admin test cases
	// add admin

	@Test
	public void addAdmin() {
		Admin admin = new Admin();
//		admin.setAdminid((long) 2);
		admin.setAdminname("admin");
		admin.setAdminphno("1234567891");
		admin.setAdminpassword("admin@123");
		admin.setAdminemail("admin2@gmail.com");
		admin.setAdminage("23");
		admin.setAdmingender("male");
		admin.setAdminaddress("UP");
		admin.setAdminJoinDate("11/04/2023");
		admin.setSeniormangeremail("senior@gmail.com");
		adminRepository.save(admin);
	}

	// List of Admins

	@Test
	public void listAdmins() {
		List<Admin> list = adminRepository.findAll();
		System.out.println("\n  | List of the Admins | \n");
		list.forEach(System.out::println);
		assertThat(list).size().isGreaterThan(0);
		System.out.println("\n");
	}




}
