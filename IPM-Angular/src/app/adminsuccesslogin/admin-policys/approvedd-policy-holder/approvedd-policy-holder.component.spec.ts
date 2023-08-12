import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveddPolicyHolderComponent } from './approvedd-policy-holder.component';

describe('ApproveddPolicyHolderComponent', () => {
  let component: ApproveddPolicyHolderComponent;
  let fixture: ComponentFixture<ApproveddPolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveddPolicyHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveddPolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
