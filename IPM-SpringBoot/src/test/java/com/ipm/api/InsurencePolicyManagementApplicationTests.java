package com.ipm.api;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.ipm.api.policy.*;
import com.ipm.api.customer.*;
import com.ipm.api.admin.*;
import com.ipm.api.customerPolicyApply.*;
import com.ipm.api.customerQuery.*;
import com.ipm.api.publicQuestion.*;

@SpringBootTest
class InsurencePolicyManagementApplicationTests {
	@Autowired
	private PolicyRepo policiesRepository;
	@Autowired
	private CustomerRepo userRepository;
	@Autowired
	private AdminRepo adminRepository;
	@Autowired
	private CustomerApplyPolicyRepo Capplyrepo;
	@Autowired
	private QustionsCustomerRepo CQuestions;
	@Autowired
	private PublicQuestionRepo pQuertRepo;

	// Testing with Customer
	// Creating a customer
	@Test
	public void addCustomer() {
		Customer user = new Customer();
//		user.setCid((long) 2);
		user.setCname("kishore");
		user.setCphno("1234567890");
		user.setCpassword("123456");
		user.setCemail("kishore@gmail");
		user.setCage("23");
		user.setCgender("male");
		user.setCaddress("India");
		userRepository.save(user);
	}

	// List of Customers
	@Test
	public void customers() {
		List<Customer> list = userRepository.findAll();
		System.out.println("\n  | List of the Customers | \n");
		list.forEach(System.out::println);
		assertThat(list).size().isGreaterThan(0);
		System.out.println("\n");
		assertThat(list).size().isGreaterThan(0);
	}

	// customer details update
	@Test
	public void updateCustomer() {
		Customer user = userRepository.findById((long) 23).get();
		user.setCname("Kishore");
		user.setCemail("kishore123@gmail.com");
		user.setCpassword("1234");
		user.setCphno("1234567890");
		userRepository.save(user);
		assertNotEquals("kishore@gmail", userRepository.findById((long) 23).get().getCemail());
		assertNotEquals("123456", userRepository.findById((long) 23).get().getCpassword());
		assertNotEquals("9876543219", userRepository.findById((long) 23).get().getCphno());
	}

	// Get user by id
	@Test
	public void getUser() {
		Customer user = userRepository.findById((long) 23).get();
		assertEquals("Kishore", user.getCname());
		System.out.println("\n" + user);
	}

	// End of user testing

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
		assertNotNull(policiesRepository.findById((long) 90).get());
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
		Policy policy = policiesRepository.findById((long) 54).get();
		assertEquals("26/094/200", policy.getAddDateOfPolicy());
		System.out.println("\n policy by id " + policy + "\n");
	}

	// policy update
	@Test
	public void updatePolicy() {
		Policy policy = policiesRepository.findById((long) 54).get();
		policy.setPolicyname("National Health dup");
		policy.setPolicycatagory("Health");
		policy.setAddDateOfPolicy("26/04/2000");
		policiesRepository.save(policy);
		assertNotEquals("LIC", policiesRepository.findById((long) 54).get().getPolicyname());
		assertNotEquals("Healt", policiesRepository.findById((long) 54).get().getPolicycatagory());
		assertNotEquals("26/04/200", policiesRepository.findById((long) 54).get().getAddDateOfPolicy());
	}

	// delete the policy by id
	@Test
	public void toDeletePolicyById() {
		// Create a policy for testing
		Policy policy = policiesRepository.findById((long) 58).get();

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

	// admin test cases
	// add admin

	@Test
	public void addAdmin() {
		Admin admin = new Admin();
		admin.setAdminid((long) 2);
		admin.setAdminname("admin");
		admin.setAdminphno("1234567891");
		admin.setAdminpassword("admin@123");
		admin.setAdminemail("admin@gmail.com");
		admin.setAdminage("23");
		admin.setAdmingender("male");
		admin.setAdminaddress("UP");
		admin.setAdminJoinDate("11/04/2023");
		admin.setSeniormangeremail("senior@gmail.com");
		adminRepository.save(admin);
	}

	// List of Admins

	@Test
	public void listAdmins() {
		List<Admin> list = adminRepository.findAll();
		System.out.println("\n  | List of the Admins | \n");
		list.forEach(System.out::println);
		assertThat(list).size().isGreaterThan(0);
		System.out.println("\n");
	}

	// Customer applying for policy

	@Test
	public void customerApply_P() {
		CustomerApplyPolicy cap = new CustomerApplyPolicy();
		cap.setAppid((long) 2);
		cap.setCustomername("admin 1");
		cap.setCustomeremail("admin1@gmail.com");
		cap.setPolicyPrice("700000");
		cap.setPolicyCatagory("Health");
		cap.setPolicyName("Heart");
		cap.setStatus("Disapproved");
		cap.setPolicyapplydate("26/01/200");
		Capplyrepo.save(cap);
		assertNotNull(Capplyrepo.findById((long) 2).get());

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

	// Add customer query
	@Test
	public void cQueries() {
		QuestionsCustomer queries = new QuestionsCustomer();
		queries.setCustomeremail("admin1@gmail.com");
		queries.setQid((long) 10);
		queries.setQtopic("Policy");
		queries.setQdetails("What is Tenure for LIC Policy??");
		CQuestions.save(queries);
		assertNotNull(CQuestions.findById((long) 10).get());
	}

	// Customer Query Answer
	@Test
	public void aCQueries() {
		QuestionsCustomer queries = CQuestions.findById((long) 10).get();
		queries.setQanswer("3 Years");
		queries.setAnswerdate("26/04/2000");
		CQuestions.save(queries);
		assertNotNull(CQuestions.findById((long) 10).get());
	}

	// Customer Query List
	@Test
	public void cQueryList() {
		List<QuestionsCustomer> list = CQuestions.findAll();
		assertThat(list).size().isGreaterThan(0);
		System.out.println("\n");
		list.forEach(System.out::println);
	}

	// Add Public query
	@Test
	public void addPQueries() {
		PublicQuestion queries = new PublicQuestion();
		queries.setUsmsemail("sripathi@gmail.com");
		queries.setUsmsid((long) 1);
		queries.setUcustomername("Sripathi");
		queries.setSms("What are the documents required  for LIC Policy");
		pQuertRepo.save(queries);
		assertNotNull(pQuertRepo.findById((long) 1).get());
	}

	@Test
	public void pQueryList() {
		List<PublicQuestion> list = pQuertRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
		System.out.println("\n");
		list.forEach(System.out::println);
	}
}
