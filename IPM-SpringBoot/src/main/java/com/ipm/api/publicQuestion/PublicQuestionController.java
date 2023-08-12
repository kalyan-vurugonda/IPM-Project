package com.ipm.api.publicQuestion;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ipm.api.exceptions.ProjectExecption;

@RestController
@CrossOrigin("http://localhost:4200")
public class PublicQuestionController {
	@Autowired
	public PublicQuestionService userv;
	HttpStatus hs;

	// Save All Unknown sms

	@PostMapping("/addunknowsms")
	public HttpStatus saveSms(@RequestBody PublicQuestion sms) {

		try {
			userv.saveSms(sms);
			return hs.CREATED;
		} catch (Exception e) {
			e.printStackTrace(); // Log the exception details
			throw new ProjectExecption("An error occurred while saving the SMS.");
		}

	}

	// Get Unknown sms
	@GetMapping("/getunknownsms")
	public List<PublicQuestion> getsmss() {
		return userv.getAllSms();
	}

	// Count unknown sms
	@GetMapping("/unknownsmscount")
	public int countUnknownSMs() {

		return userv.countSms();
	}

	@DeleteMapping("/deleteusms/{id}")
	public String deleteSms(@PathVariable("id") Long id) {

		return userv.deleteSms(id);
	}

}
