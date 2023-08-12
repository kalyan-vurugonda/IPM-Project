package com.ipm.api.policy;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

public class PolicyController {
	@Autowired
	PolicyService ps;
	HttpStatus hs;

	// Save Policys
	@PostMapping("/addpolicys")
	public HttpStatus addPolicy(@RequestBody Policy po) {
		try {
			ps.saveCustomer(po);
			return hs.CREATED;
		} catch (Exception e) {
			throw new ProjectExecption();
		}

	}

	// get policy
	@GetMapping("/getpolicys")
	public List<Policy> getPolicy() {
		return ps.showPolicy();

	}

	
	@GetMapping("/getpolicy/{id}")
    public ResponseEntity<Policy> getPolicyById(@PathVariable Long id) {
        Policy policy = ps.getPolicyById(id);
        
        if (policy != null) {
            return ResponseEntity.ok(policy);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	// Update Policy by id
	@PutMapping("/updatepolicy/{id}")
	public HttpStatus updatePolicy(@PathVariable("id") Long id, @RequestBody Policy p) {
		Policy pp = ps.updatePolicyById(id, p);
		if (pp != null) {
			return HttpStatus.OK;
		} else {
			throw new ProjectExecption();
		}
	}

	@DeleteMapping("/deletepolicy/{id}")
	public HttpStatus deletePolicyById(@PathVariable Long id) {
		try {
			ps.deletebyid(id);
			return HttpStatus.OK;
		} catch (Exception e) {

			throw new ProjectExecption();
		}
	}

	// Counting Policies
	@GetMapping("/countpolicy")
	public int countPolicy() {
		List<Policy> total_policy = ps.showPolicy();
		return total_policy.size();
	}

}
