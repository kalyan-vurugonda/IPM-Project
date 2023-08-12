import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadmisComponent } from './viewadmis.component';

describe('ViewadmisComponent', () => {
  let component: ViewadmisComponent;
  let fixture: ComponentFixture<ViewadmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewadmisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewadmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
