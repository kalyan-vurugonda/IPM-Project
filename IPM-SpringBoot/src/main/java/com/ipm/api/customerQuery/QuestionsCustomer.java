package com.ipm.api.customerQuery;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.ipm.api.TodysDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuestionsCustomer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long qid;
	@Column(nullable = false)

	private String customeremail;
	@Column(nullable = false)
	private String qtopic;
	@Column(nullable = false)
	private String qdetails;
	private String qdate = TodysDate.todayDate();
	private String qanswer;
	private String answerdate;

	public Long getQid() {
		return qid;
	}

	public void setQid(Long qid) {
		this.qid = qid;
	}

	public String getCustomeremail() {
		return customeremail;
	}

	public void setCustomeremail(String customeremail) {
		this.customeremail = customeremail;
	}

	public String getQtopic() {
		return qtopic;
	}

	public void setQtopic(String qtopic) {
		this.qtopic = qtopic;
	}

	public String getQdetails() {
		return qdetails;
	}

	public void setQdetails(String qdetails) {
		this.qdetails = qdetails;
	}

	public String getQdate() {
		return qdate;
	}

	public void setQdate(String qdate) {
		this.qdate = qdate;
	}

	public String getQanswer() {
		return qanswer;
	}

	public void setQanswer(String qanswer) {
		this.qanswer = qanswer;
	}

	public String getAnswerdate() {
		return answerdate;
	}

	public void setAnswerdate(String answerdate) {
		this.answerdate = answerdate;
	}

}
