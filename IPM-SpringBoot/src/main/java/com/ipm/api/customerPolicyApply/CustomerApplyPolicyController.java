package com.ipm.api.customerPolicyApply;

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
public class CustomerApplyPolicyController {
	@Autowired
	CustomerApplyPolicyService apservice;
	HttpStatus httpStatus;

	// Save Application
	@PostMapping("/applypolicy")

	public HttpStatus applicationSave(@RequestBody CustomerApplyPolicy cpp) {
		if (apservice.matchApplicationWithTotdalPolicy(cpp.getCustomeremail())) {

			try {

				apservice.applicatonPolicy(cpp);
				return httpStatus.CREATED;

			} catch (Exception e) {
				throw new ProjectExecption();
			}

		} else {
			throw new ProjectExecption("You can't apply  above totall Policy ");
		}

	}

	@GetMapping("/getallaplicationofpolicy")

	public List<CustomerApplyPolicy> showApplication() {

		return apservice.getCustomerApplication();
	}

	// History of application
	@GetMapping("/historyofapplications/{cemail}")
	public List<CustomerApplyPolicy> hsitory(@PathVariable("cemail") String cemail) {

		return apservice.history(cemail);
	}

	// Update Status
	@PutMapping("/updatestatus/{id}")

	public String updateStatus(@PathVariable Long id, @RequestBody CustomerApplyPolicy cap) {

		CustomerApplyPolicy cp = apservice.updateStatus(id, cap);
		if (cp != null) {

			apservice.updateStatus(id, cap);

			return "Updated";
		} else {
			throw new ProjectExecption();
		}

	}

	@GetMapping("/countApprove")
	public int countApprove() {

		return apservice.countOfApprove("Approved");
	}

	// count pending
	@GetMapping("/countPending")
	public int countPending() {

		return apservice.countOfApprove("Pending");
	}

	@GetMapping("/countrejected")
	public int countRejacted() {
		return apservice.countOfApprove("Rejected");
	}

	@GetMapping("/countapplication")
	public int countApply() {
		List<CustomerApplyPolicy> capp = apservice.getCustomerApplication();
		return capp.size();
	}

	// @Get Customer by Status----

	@GetMapping("/getcustomersByRejected")
	public List<CustomerApplyPolicy> getCustomerApplications() {

		return apservice.showDataStatus("Rejected");

	}

	@GetMapping("/getcustomersByPending")

	public List<CustomerApplyPolicy> getCustomerByPending() {

		return apservice.showDataStatus("Pending");

	}

	@GetMapping("/getcustomersByApproved")
	public List<CustomerApplyPolicy> getCustomerByApproved() {

		return apservice.showDataStatus("Approved");

	}

	// Delete Application
	@DeleteMapping("/deleteaplication/{id}")

	public HttpStatus deleteStatus(@PathVariable("id") Long id) {

		apservice.deleteCustomerApplication(id);

		return HttpStatus.OK;

	}

}
