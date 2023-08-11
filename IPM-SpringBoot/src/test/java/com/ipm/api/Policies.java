package com.ipm.api;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.ipm.api.policy.*;
import com.ipm.api.customerPolicyApply.*;


@SpringBootTest
class Policies {
	@Autowired
	private PolicyRepo policiesRepository;
	@Autowired
	private CustomerApplyPolicyRepo Capplyrepo;
	// Policy related Testing
		// creating a policy
	@Test
	public void addPolicies() {
		Policy policies = new Policy();
		policies.setPid((long) 1);
		policies.setPolicyname("Health");
		policies.setPolicycatagory("Lic");
		policies.setAddDateOfPolicy("26/04/2000");
		policiesRepository.save(policies);
//		assertNotNull(policiesRepository.findById((long) 90).get());
	}

	// List of Policies
	@Test
	public void policies() {
		List<Policy> list = policiesRepository.findAll();
		System.out.println("\n| List of the Policies | \n");
		list.forEach(System.out::println);
		assertThat(list).size().isGreaterThan(0);
	}

	// get policy by id and date of policy
	@Test
	public void getPolicy() {
		Policy policy = policiesRepository.findById((long) 4).get();
		assertEquals("26/04/2000", policy.getAddDateOfPolicy());
		System.out.println("\n policy by id " + policy + "\n");
	}

	// policy update
	@Test
	public void updatePolicy() {
		Policy policy = policiesRepository.findById((long) 12).get();
		policy.setPolicyname("National Health dup");
		policy.setPolicycatagory("Health");
		policy.setAddDateOfPolicy("26/04/2000");
		policiesRepository.save(policy);
		assertNotEquals("LIC", policiesRepository.findById((long) 12).get().getPolicyname());
		assertNotEquals("Healt", policiesRepository.findById((long) 12).get().getPolicycatagory());
		assertNotEquals("26/04/200", policiesRepository.findById((long) 12).get().getAddDateOfPolicy());
	}

	// delete the policy by id
	@Test
	public void toDeletePolicyById() {
		// Create a policy for testing
		Policy policy = policiesRepository.findById((long) 15).get();

		// Delete the policy
		policiesRepository.deleteById(policy.getPid());

		// Verify that the policy was deleted
		assertFalse(policiesRepository.existsById(policy.getPid()));
	}

	// Count of the Policies crested
	@Test
	public void testpolicycount() {

		// Call the method that should use the repository's count method
		long RowCount = policiesRepository.count();
		System.out.println("\n count of the policies is : " + RowCount + "\n");
	}

	// End of policy related tests
	
	// Customer applying for policy

	@Test
	public void customerApply_P() {
		CustomerApplyPolicy cap = new CustomerApplyPolicy();
//		cap.setAppid((long) 2);
		cap.setCustomername(" Vishnu");
		cap.setCustomeremail("Vishnu1@gmail.com");
		cap.setPolicyPrice("700000");
		cap.setPolicyCatagory("Health");
		cap.setPolicyName("Heart");
		cap.setStatus("Disapproved");
		cap.setPolicyapplydate("26/01/200");
		Capplyrepo.save(cap);


	}

	// List of policies from Admin
	@Test
	public void pApprovalsList() {
		String status = "pending";
		List<CustomerApplyPolicy> list = Capplyrepo.findByStatusIs(status);
		assertThat(list).size().isGreaterThan(0);
		System.out.println("\n");
		list.forEach(System.out::println);

	}

	@Test
	public void pApprovedList() {
		String status = "Approved";
		List<CustomerApplyPolicy> list = Capplyrepo.findByStatusIs(status);
		assertThat(list).size().isGreaterThan(0);
		System.out.println("\n");
		list.forEach(System.out::println);

	}

	@Test
	public void pdisApprovedList() {
		String status = "Disapproved";
		List<CustomerApplyPolicy> list = Capplyrepo.findByStatusIs(status);
		assertThat(list).size().isGreaterThan(0);
		System.out.println("\n");
		list.forEach(System.out::println);

	}

	// List of Customer Policies
	@Test
	public void customersPolicyList() {
		List<CustomerApplyPolicy> list = Capplyrepo.findAll();
		assertThat(list).size().isGreaterThan(0);
		System.out.println("\n");
		list.forEach(System.out::println);
	}	
	
	
	
	
	
}
