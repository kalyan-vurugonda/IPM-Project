import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomersComponent } from './admincustomers.component';

describe('AdmincustomersComponent', () => {
  let component: AdmincustomersComponent;
  let fixture: ComponentFixture<AdmincustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
