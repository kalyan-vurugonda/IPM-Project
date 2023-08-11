import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIpmComponent } from './services-ipm.component';

describe('ServicesIpmComponent', () => {
  let component: ServicesIpmComponent;
  let fixture: ComponentFixture<ServicesIpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesIpmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesIpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
