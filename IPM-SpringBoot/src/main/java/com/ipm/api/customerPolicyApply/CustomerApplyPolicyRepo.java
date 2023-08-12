package com.ipm.api.customerPolicyApply;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public
 interface CustomerApplyPolicyRepo extends JpaRepository<CustomerApplyPolicy, Long> {
		public CustomerApplyPolicy findByAppid(Long id);

     public	List<CustomerApplyPolicy> findByStatusIs(String status);
     
     	public List<CustomerApplyPolicy> findBycustomeremailIs(String customeremail);
		
}

