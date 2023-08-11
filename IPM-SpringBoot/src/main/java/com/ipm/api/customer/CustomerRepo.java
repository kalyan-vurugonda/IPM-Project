package com.ipm.api.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public
interface  CustomerRepo extends JpaRepository<Customer, Long> {

	

	public Customer findByCemailAndCpassword(String email, String password);

	public Customer findByCemail(String email);

}
