package com.ipm.api.admin;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.ipm.api.TodysDate;

import lombok.Data;

@Entity
@Data
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long adminid;
	@Column(unique = true, nullable = false)
	private String adminemail;
	@Column(nullable = false)
	private String adminname;
	private String adminpassword;
	private String adminphno;
	private String adminage;
	private String admingender;
	private String adminaddress;

	private String seniormangeremail;
	private String adminJoinDate = TodysDate.todayDate();

	public Long getAdminid() {
		return adminid;
	}

	public void setAdminid(Long adminid) {
		this.adminid = adminid;
	}

	public String getAdminemail() {
		return adminemail;
	}

	public void setAdminemail(String adminemail) {
		this.adminemail = adminemail;
	}

	public String getAdminname() {
		return adminname;
	}

	public void setAdminname(String adminname) {
		this.adminname = adminname;
	}

	public String getAdminpassword() {
		return adminpassword;
	}

	public void setAdminpassword(String adminpassword) {
		this.adminpassword = adminpassword;
	}

	public String getAdminphno() {
		return adminphno;
	}

	public void setAdminphno(String adminphno) {
		this.adminphno = adminphno;
	}

	public String getAdminage() {
		return adminage;
	}

	public void setAdminage(String adminage) {
		this.adminage = adminage;
	}

	public String getAdmingender() {
		return admingender;
	}

	public void setAdmingender(String admingender) {
		this.admingender = admingender;
	}

	public String getAdminaddress() {
		return adminaddress;
	}

	public void setAdminaddress(String adminaddress) {
		this.adminaddress = adminaddress;
	}

	public String getSeniormangeremail() {
		return seniormangeremail;
	}

	public void setSeniormangeremail(String seniormangeremail) {
		this.seniormangeremail = seniormangeremail;
	}

	public String getAdminJoinDate() {
		return adminJoinDate;
	}

	public void setAdminJoinDate(String adminJoinDate) {
		this.adminJoinDate = adminJoinDate;
	}

}
