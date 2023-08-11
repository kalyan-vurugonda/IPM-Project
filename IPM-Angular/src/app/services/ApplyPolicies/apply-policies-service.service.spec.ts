import { TestBed } from '@angular/core/testing';

import { ApplyPoliciesServiceService } from './apply-policies-service.service';

describe('ApplyPoliciesServiceService', () => {
  let service: ApplyPoliciesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyPoliciesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
