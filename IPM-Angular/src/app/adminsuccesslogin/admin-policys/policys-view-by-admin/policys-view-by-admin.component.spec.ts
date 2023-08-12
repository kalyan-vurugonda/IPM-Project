import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicysViewByAdminComponent } from './policys-view-by-admin.component';

describe('PolicysViewByAdminComponent', () => {
  let component: PolicysViewByAdminComponent;
  let fixture: ComponentFixture<PolicysViewByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicysViewByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicysViewByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
