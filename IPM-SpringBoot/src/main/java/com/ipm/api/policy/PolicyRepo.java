package com.ipm.api.policy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  PolicyRepo extends JpaRepository<Policy, Long> {

	public Policy findByPid(Long id);


}
