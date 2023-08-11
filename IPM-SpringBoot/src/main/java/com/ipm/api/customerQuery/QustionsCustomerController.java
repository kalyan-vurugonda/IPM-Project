package com.ipm.api.customerQuery;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ipm.api.exceptions.ProjectExecption;

@RestController
@CrossOrigin("http://localhost:4200")
public class QustionsCustomerController {

	@Autowired
	public QustionsCustomerService qservice;
	public HttpStatus status;

	// Save Questions
	@PostMapping("/savequestion")
	public HttpStatus saveQuestionsCustomer(@RequestBody QuestionsCustomer cqs) {

		try {
			qservice.saveQuestions(cqs);
			return status.CREATED;
		} catch (Exception e) {
			throw new ProjectExecption();
		}

	}

	@GetMapping("/findQuestionsBystatus")
	public List<QuestionsCustomer> getAllPendingReply() {
		return qservice.findByReply();
	}

	@GetMapping("/countNotReply")

	public int CountAllPendingReply() {

		List<QuestionsCustomer> total_pending_reply = qservice.findByReply();
		return total_pending_reply.size();
	}

	// Get All qustions
	@GetMapping("/customerquestions")
	public List<QuestionsCustomer> getQuestions() {
		return qservice.getAllQuestions();
	}

	// Ans given By admin
	@PutMapping("/ans/{id}")
	public HttpStatus giveAnS(@PathVariable("id") Long qid, @RequestBody QuestionsCustomer qc) {
		try {

			QuestionsCustomer u = qservice.updateAns(qid, qc);
			if (u != null) {
				return status.OK;
			} else {
				throw new ProjectExecption("Your: " + qid + "Id Not Found");
			}

		} catch (Exception e) {
			throw new ProjectExecption();
		}
	}
	// Find Questions By Email Id

	@GetMapping("/findqustions/{email}")
	public List<QuestionsCustomer> finquestionsByEmail(@PathVariable("email") String e) {

		return qservice.findByEmail(e);
	}

	@GetMapping("/countCustomerQuestions")
	public int countQu() {
		List<QuestionsCustomer> cc = qservice.getAllQuestions();
		return cc.size();
	}

}
