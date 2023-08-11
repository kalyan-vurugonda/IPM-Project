package com.ipm.api;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.ipm.api.customerQuery.*;
import com.ipm.api.publicQuestion.*;

@SpringBootTest
class Queries {
	@Autowired
	private QustionsCustomerRepo CQuestions;
	@Autowired
	private PublicQuestionRepo pQuertRepo;
	
	// Add customer query
	@Test
	public void cQueries() {
		QuestionsCustomer queries = new QuestionsCustomer();
		queries.setCustomeremail("admin1@gmail.com");
		queries.setQid((long) 10);
		queries.setQtopic("Policy");
		queries.setQdetails("What is Tenure for LIC Policy??");
		CQuestions.save(queries);

	}

	// Customer Query Answer
	@Test
	public void aCQueries() {
		QuestionsCustomer queries = CQuestions.findById((long) 2).get();
		queries.setQanswer("3 Years");
		queries.setAnswerdate("26/04/2000");
		CQuestions.save(queries);
		assertNotNull(CQuestions.findById((long) 2).get());
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
	}

	@Test
	public void pQueryList() {
		List<PublicQuestion> list = pQuertRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
		System.out.println("\n");
		list.forEach(System.out::println);
	}

	
	
}
