import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentForDoctorComponent } from './add-appointment-for-doctor.component';

describe('AddAppointmentForDoctorComponent', () => {
  let component: AddAppointmentForDoctorComponent;
  let fixture: ComponentFixture<AddAppointmentForDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppointmentForDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppointmentForDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
