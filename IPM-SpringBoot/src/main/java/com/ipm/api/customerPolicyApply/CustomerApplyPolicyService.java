package com.ipm.api.customerPolicyApply;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ipm.api.policy.PolicyService;

@Service
public class CustomerApplyPolicyService {
	@Autowired
	public CustomerApplyPolicyRepo apprepo;;

	@Autowired
	public PolicyService policysService;

	// Aplly Policy or Save Policy in Apply Table
	public CustomerApplyPolicy applicatonPolicy(CustomerApplyPolicy apply) {
		return apprepo.save(apply);
	}

	// Getting Apllication Table
	public List<CustomerApplyPolicy> getCustomerApplication() {

		return apprepo.findAll();

	}

	// Delete Customer Application
	public void deleteCustomerApplication(Long id) {

		this.apprepo.deleteById(id);
	}

	// Update Status
	public CustomerApplyPolicy updateStatus(Long id, CustomerApplyPolicy application) {
		CustomerApplyPolicy cp = apprepo.findByAppid(id);
		if (cp != null) {
			cp.setStatus(application.getStatus());
			return apprepo.save(cp);
		} else {
			return null;
		}

	}

	// Counting which one approve or disapprove
	public int countOfApprove(String status) {

		List<CustomerApplyPolicy> approve_list = apprepo.findByStatusIs(status);

		return approve_list.size();

	}

	public List<CustomerApplyPolicy> history(String cemail) {

		return apprepo.findBycustomeremailIs(cemail);

	}

	// Customer can't apply above all Policy count
	public boolean matchApplicationWithTotdalPolicy(String email) {
		int countPolicy = policysService.showPolicy().size();
		int countApplicationByEmailId = history(email).size();

		if (countApplicationByEmailId < countPolicy) {

			return true;
		} else {
			return false;
		}

	}

	public List<CustomerApplyPolicy> showDataStatus(String status) {

		List<CustomerApplyPolicy> data_status = apprepo.findByStatusIs(status);

		return data_status;

	}

}
