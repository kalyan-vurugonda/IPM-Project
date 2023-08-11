package com.ipm.api.publicQuestion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicQuestionRepo  extends JpaRepository<PublicQuestion, Long>{
}
