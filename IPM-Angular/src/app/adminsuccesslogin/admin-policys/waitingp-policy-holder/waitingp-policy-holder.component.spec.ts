import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingpPolicyHolderComponent } from './waitingp-policy-holder.component';

describe('WaitingpPolicyHolderComponent', () => {
  let component: WaitingpPolicyHolderComponent;
  let fixture: ComponentFixture<WaitingpPolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingpPolicyHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingpPolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
