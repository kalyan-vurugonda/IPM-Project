package com.ipm.api.customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ipm.api.exceptions.ProjectExecption;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@ControllerAdvice

public class CustomerController {
	@Autowired
	CustomerService cs;
	// For adding Customer use (/addcustomer)

	@PostMapping("/addcustomer")

	public ResponseEntity<Customer> addCustomer(@RequestBody Customer cc) {
		return ResponseEntity.ok(cs.saveCustomer(cc));
	}

	@GetMapping("/showcustomers")

	public List<Customer> showallCus() {
		return cs.showCustomers();
	}

	@GetMapping("/showdata/{email}/{password}")

	public Customer showaCustomerByEamilAndPass(@PathVariable("email") String email,
			@PathVariable("password") String password) {

		Customer cu = cs.showCustomerUsingLogin(email, password);
		if (cu != null) {
			return cu;

		} else {
			return null;
		}

	}
	// Check for Login MAping.....

	@GetMapping("/login/{email}/{password}")

	public Customer ulogin(@PathVariable("email") String email, @PathVariable("password") String password)
			throws ProjectExecption {
		Customer c = cs.showCustomerUsingLogin(email, password);
		if (cs.showCustomerUsingLogin(email, password) == null) {

			throw new ProjectExecption();
		} else {

			return c;
		}
	}

	@PutMapping("/updatecustomer/{email}")

	public String updateCustomer(@PathVariable("email") String email, @RequestBody Customer customer) {
		try {

			Customer cc = cs.updateCustomerByEmail(email, customer);
			if (cc != null) {
				return customer.getCname() + " Your data is updated";
			} else {

				throw new ProjectExecption();
			}

		} catch (Exception e) {
			throw new ProjectExecption();
		}

	}

	@DeleteMapping("/deletecustomer/{id}")

	public String deleteUser(@PathVariable("id") Long id) {
		try {
			cs.deletecustomer(id);
			return id + "  this Id of Customer Deleted";
		} catch (Exception e) {
			throw new ProjectExecption("Your  " + id + " Not foud");

		}
	}

	// Count Register Customer...
	@GetMapping("/countcustomer")
	public int countCustomer() {
		List<Customer> cl = cs.showCustomers();

		return cl.size();
	}

}
