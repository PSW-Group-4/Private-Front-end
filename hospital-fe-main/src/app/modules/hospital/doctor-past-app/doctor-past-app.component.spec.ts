import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPastAppComponent } from './doctor-past-app.component';

describe('DoctorPastAppComponent', () => {
  let component: DoctorPastAppComponent;
  let fixture: ComponentFixture<DoctorPastAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPastAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPastAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
