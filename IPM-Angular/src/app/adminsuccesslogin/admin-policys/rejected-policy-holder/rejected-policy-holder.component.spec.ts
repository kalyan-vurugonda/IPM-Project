import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedPolicyHolderComponent } from './rejected-policy-holder.component';

describe('RejectedPolicyHolderComponent', () => {
  let component: RejectedPolicyHolderComponent;
  let fixture: ComponentFixture<RejectedPolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedPolicyHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedPolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
