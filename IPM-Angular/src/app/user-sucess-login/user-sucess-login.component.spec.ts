import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSucessLoginComponent } from './user-sucess-login.component';

describe('UserSucessLoginComponent', () => {
  let component: UserSucessLoginComponent;
  let fixture: ComponentFixture<UserSucessLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSucessLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSucessLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
