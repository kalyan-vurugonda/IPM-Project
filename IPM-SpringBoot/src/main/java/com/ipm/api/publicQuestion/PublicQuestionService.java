package com.ipm.api.publicQuestion;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PublicQuestionService {
	@Autowired
	public PublicQuestionRepo urepo;
	// Save sms in DB

	public PublicQuestion saveSms(PublicQuestion sms) {
		return urepo.save(sms);

	}

	// Get All unknown sms
	public List<PublicQuestion> getAllSms() {

		return urepo.findAll();
	}
	// Count sms

	public int countSms() {
		List<PublicQuestion> allsms = urepo.findAll();
		return allsms.size();
	}

	public String deleteSms(Long id) {

		urepo.deleteById(id);

		return id + " Id Sms have benn Deleted";

	}
}
