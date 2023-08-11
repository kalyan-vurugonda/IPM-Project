import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLowerAdminComponent } from './update-lower-admin.component';

describe('UpdateLowerAdminComponent', () => {
  let component: UpdateLowerAdminComponent;
  let fixture: ComponentFixture<UpdateLowerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLowerAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLowerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
