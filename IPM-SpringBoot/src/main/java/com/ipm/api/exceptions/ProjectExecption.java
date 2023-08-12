package com.ipm.api.exceptions;

import org.springframework.http.HttpStatus;


import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)

public class ProjectExecption extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
		public ProjectExecption() {
			super();
		}
		
		public ProjectExecption(String s) {
			super(s);
		}
	
	
	

		
}
