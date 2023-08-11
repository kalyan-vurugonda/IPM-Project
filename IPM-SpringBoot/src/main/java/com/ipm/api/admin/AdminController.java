package com.ipm.api.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ipm.api.exceptions.ProjectExecption;

@RestController

@CrossOrigin("http://localhost:4200")
public class AdminController {
	HttpStatus hs;
	@Autowired
	AdminService adminService;
	// For adding Customer use (/addadmin)

	@PostMapping("/addadmin")

	public Admin addAdmin(@RequestBody Admin aa) {

		try {

			return adminService.saveAdmin(aa);
		} catch (Exception e) {
			throw new ProjectExecption();

		}

	}

	// Getting Data from Admin tale

	@GetMapping("/showadmins")

	public List<Admin> showallAdmins() {
		return adminService.showAdmins();
	}

	// Getting data using emaiid and password

	@GetMapping("/adminshowdata/{email}/{password}")

	public Admin showaCustomerByEamilAndPass(@PathVariable("email") String email,
			@PathVariable("password") String password) {

		Admin adu = adminService.showAdminUsingLogin(email, password);
		if (adu != null) {

			return adu;

		} else {
			throw new ProjectExecption("Admin Not Found");
		}

	}
	// Check for Login MAping.....

	// @GetMapping("/adminlogin/{email}/{password}")

//	public Ad loginSystem(@PathVariable("email") String email,@PathVariable("password") String password){
//		if(adminService.showAdminUsingLogin(email, password)==null) {
//			return false;
//		}else {
//			return true;
//			
//		}
//	}

	@GetMapping("/lowerAdmin/{email}")

	public List<Admin> listOfAdmin(@PathVariable("email") String admin) {

		return adminService.findbyAdminEmail(admin);

	}

	@PutMapping("/updateadmin/{email}")

	public HttpStatus updateCustomer(@PathVariable("email") String email, @RequestBody Admin admin) {
		try {

			Admin cc = adminService.updateAdminByEmail(email, admin);
			if (cc != null) {
				return hs.OK;
			} else {

				throw new ProjectExecption();
			}

		} catch (Exception e) {
			throw new ProjectExecption();
		}

	}
	// Delete Data in admin

	@DeleteMapping("/deleteadmin/{id}")

	public String deleteUser(@PathVariable("id") Long id) {
		try {
			adminService.deleteAdmin(id);
			return id + " is Deleted";
		} catch (Exception e) {
			throw new ProjectExecption();

		}
	}

	// Admin update by Id-----

	@PutMapping("/adminupdate/{id}")
	public Admin updateById(@PathVariable("id") Long id, @RequestBody Admin admin) {
		try {

			Admin cc = adminService.updateById(id, admin);
			if (cc != null) {
				return cc;
			} else {

				throw new ProjectExecption();
			}

		} catch (Exception e) {
			throw new ProjectExecption();
		}

	}
}
