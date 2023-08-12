import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnknownCustomerComponent } from './admin-unknown-customer.component';

describe('AdminUnknownCustomerComponent', () => {
  let component: AdminUnknownCustomerComponent;
  let fixture: ComponentFixture<AdminUnknownCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUnknownCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUnknownCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
