import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminByAdminComponent } from './add-admin-by-admin.component';

describe('AddAdminByAdminComponent', () => {
  let component: AddAdminByAdminComponent;
  let fixture: ComponentFixture<AddAdminByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
