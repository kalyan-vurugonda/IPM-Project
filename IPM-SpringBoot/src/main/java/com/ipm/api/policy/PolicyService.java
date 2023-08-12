package com.ipm.api.policy;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.ipm.api.TodysDate;

@Service
public class PolicyService {
	@Autowired
	PolicyRepo prepo;

	// Insert data in Database
	public Policy saveCustomer(Policy c) {

		return prepo.save(c);

	}
	public Policy getPolicyById(Long id) {
        return prepo.findById(id).orElse(null);
    }

	// Show all customer details
	public List<Policy> showPolicy() {

		return prepo.findAll();

	}

	// Update Policy--
	public Policy updatePolicyById(Long id, Policy p) {
		Policy fp = prepo.findByPid(id);
		if (fp != null) {
			fp.setAddDateOfPolicy(TodysDate.todayDate());

			fp.setPolicycatagory(p.getPolicycatagory());
			fp.setPolicyname(p.getPolicyname());
			return prepo.save(fp);
		} else {
			return null;
		}
	}

	// Delete By Id
	public void deletebyid(Long id) {
		prepo.deleteById(id);
	}
}
