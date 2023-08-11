import { TestBed } from '@angular/core/testing';

import { PolicysService } from './policys.service';

describe('PolicysService', () => {
  let service: PolicysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
