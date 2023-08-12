import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedPolicyHolderComponent } from './applied-policy-holder.component';

describe('AppliedPolicyHolderComponent', () => {
  let component: AppliedPolicyHolderComponent;
  let fixture: ComponentFixture<AppliedPolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedPolicyHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedPolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
