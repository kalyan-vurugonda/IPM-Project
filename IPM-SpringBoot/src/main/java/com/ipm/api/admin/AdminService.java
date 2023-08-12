package com.ipm.api.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

	@Autowired
	AdminRepo adminrepo;

	// Insert data in Database
	public Admin saveAdmin(Admin a) {

		return adminrepo.save(a);

	}

	// Show all admin details
	public List<Admin> showAdmins() {

		return adminrepo.findAll();

	}

	// Show Data by email and password
	public Admin showAdminUsingLogin(String email, String password) {

		return adminrepo.findByAdminemailAndAdminpassword(email, password);
	}

	// Update admin
	public Admin updateAdminByEmail(String email, Admin admin) {
		Admin add = adminrepo.findByAdminemail(email);

		if (add != null) {

			add.setAdminname(admin.getAdminname());
			add.setAdminpassword(admin.getAdminpassword());
			add.setAdmingender(admin.getAdmingender());
			add.setAdminphno(admin.getAdminphno());
			add.setAdminaddress(admin.getAdminaddress());
			return adminrepo.save(add);
		} else {
			return null;
		}
	}
	// Deleting admin

	public void deleteAdmin(Long id) {
		adminrepo.deleteById(id);
	}

	public List<Admin> findbyAdminEmail(String email) {

		return adminrepo.findBySeniormangeremail(email);
	}

	//
	public Admin updateById(Long id, Admin admin) {

		Admin add = adminrepo.findByadminid(id);

		if (add != null) {

			add.setAdminname(admin.getAdminname());
			add.setAdminemail(admin.getAdminemail());
			add.setAdminage(admin.getAdminage());
			add.setAdminpassword(admin.getAdminpassword());
			add.setAdmingender(admin.getAdmingender());
			add.setAdminphno(admin.getAdminphno());
			add.setAdminaddress(admin.getAdminaddress());
			return adminrepo.save(add);
		} else {
			return null;
		}

	}

}
