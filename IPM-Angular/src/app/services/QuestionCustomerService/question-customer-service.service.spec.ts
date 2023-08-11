import { TestBed } from '@angular/core/testing';

import { QuestionCustomerServiceService } from './question-customer-service.service';

describe('QuestionCustomerServiceService', () => {
  let service: QuestionCustomerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionCustomerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
