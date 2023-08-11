package com.ipm.api.customerPolicyApply;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.ipm.api.TodysDate;

import lombok.Data;

@Entity
@Table(name = "Customer_Apply_Policies")
@Data
public class CustomerApplyPolicy {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long appid;
	@Column(nullable = false)
	private String customername;
	@Column(nullable = false)
	private String customeremail;

	private String policyPrice;
	@Column(nullable = false)
	private String policyCatagory;

	private String policyName;
	private String status = "Pending";
	private String policyapplydate = TodysDate.todayDate();

	public Long getAppid() {
		return appid;
	}

	public void setAppid(Long appid) {
		this.appid = appid;
	}

	public String getCustomername() {
		return customername;
	}

	public void setCustomername(String customername) {
		this.customername = customername;
	}

	public String getCustomeremail() {
		return customeremail;
	}

	public void setCustomeremail(String customeremail) {
		this.customeremail = customeremail;
	}

	public String getPolicyPrice() {
		return policyPrice;
	}

	public void setPolicyPrice(String policyPrice) {
		this.policyPrice = policyPrice;
	}

	public String getPolicyCatagory() {
		return policyCatagory;
	}

	public void setPolicyCatagory(String policyCatagory) {
		this.policyCatagory = policyCatagory;
	}

	public String getPolicyName() {
		return policyName;
	}

	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPolicyapplydate() {
		return policyapplydate;
	}

	public void setPolicyapplydate(String policyapplydate) {
		this.policyapplydate = policyapplydate;
	}

}
