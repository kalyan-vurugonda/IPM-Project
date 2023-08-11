package com.ipm.api.customerQuery;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ipm.api.TodysDate;

@Service
public class QustionsCustomerService {
	@Autowired
	QustionsCustomerRepo qRepo;

//Save Qustions
	public QuestionsCustomer saveQuestions(QuestionsCustomer qc) {

		return qRepo.save(qc);

	}

	// Fetch Question
	public List<QuestionsCustomer> getAllQuestions() {

		return qRepo.findAll();
	}

	// Give The Answer
	public QuestionsCustomer updateAns(Long qid, QuestionsCustomer qc) {
		QuestionsCustomer qcu = qRepo.findByQidIs(qid);
		if (qcu != null) {
			qcu.setAnswerdate(TodysDate.todayDate());
			qcu.setQanswer(qc.getQanswer());
			System.out.println(qcu.toString());
		} else {
			return null;
		}

		return qRepo.save(qcu);

	}

	// Getting Questions By Reply----

	public List<QuestionsCustomer> findByReply() {

		return qRepo.findAllByqanswer(null);

	}

	// Getting Questions by Email

	public List<QuestionsCustomer> findByEmail(String Email) {
		List<QuestionsCustomer> ql = qRepo.findAllByCustomeremail(Email);
		System.out.println(ql);
		return ql;
	}

}
