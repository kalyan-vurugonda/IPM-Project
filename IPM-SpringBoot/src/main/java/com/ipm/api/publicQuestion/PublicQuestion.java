package com.ipm.api.publicQuestion;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PublicQuestion {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false)
	private Long usmsid;
	@Column(nullable = false)
	private String usmsemail;
	@Column(nullable = false)
	private String ucustomername;
	@Column(nullable = false)
	private String sms;

	public Long getUsmsid() {
		return usmsid;
	}

	public void setUsmsid(Long usmsid) {
		this.usmsid = usmsid;
	}

	public String getUsmsemail() {
		return usmsemail;
	}

	public void setUsmsemail(String usmsemail) {
		this.usmsemail = usmsemail;
	}

	public String getUcustomername() {
		return ucustomername;
	}

	public void setUcustomername(String ucustomername) {
		this.ucustomername = ucustomername;
	}

	public String getSms() {
		return sms;
	}

	public void setSms(String sms) {
		this.sms = sms;
	}

}
