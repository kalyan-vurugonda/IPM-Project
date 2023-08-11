package com.ipm.api.customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ipm.api.exceptions.ProjectExecption;

@Service
public class CustomerService {
	@Autowired
	CustomerRepo crepo;

	// Insert data in Database
	public Customer saveCustomer(Customer c) {

		return crepo.save(c);

	}

	// Show all customer details
	public List<Customer> showCustomers() {

		return crepo.findAll();

	}

	// Show Data by email and password
	public Customer showCustomerUsingLogin(String email, String password) {

		return crepo.findByCemailAndCpassword(email, password);
	}

	// Update Customer
	public Customer updateCustomerByEmail(String email, Customer customer) throws ProjectExecption {
		Customer cc = crepo.findByCemail(email);

		if (cc != null) {

			cc.setCname(customer.getCname());
			cc.setCpassword(customer.getCpassword());
			cc.setCgender(customer.getCgender());
			cc.setCphno(customer.getCphno());
			cc.setCaddress(customer.getCaddress());
			cc.setCemail(customer.getCemail());
			cc.setCage(customer.getCage());

			return crepo.save(cc);
		} else {
			return null;
		}
	}

	public void deletecustomer(Long id) {
		crepo.deleteById(id);
	}

}
