import { TestBed } from '@angular/core/testing';

import { UnknownsmsService } from './unknownsms.service';

describe('UnknownsmsService', () => {
  let service: UnknownsmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnknownsmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
