package com.ipm.api.admin;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ipm.api.customer.Customer;

@Repository
public interface AdminRepo  extends JpaRepository<Admin, Long>{
	
	public Admin findByAdminemailAndAdminpassword(String email, String password);
	public  Admin   findByAdminemail(String email);
	
		public List<Admin>  findBySeniormangeremail(String seniormangeremail);
		public Admin findByadminid(Long id);
	
}
