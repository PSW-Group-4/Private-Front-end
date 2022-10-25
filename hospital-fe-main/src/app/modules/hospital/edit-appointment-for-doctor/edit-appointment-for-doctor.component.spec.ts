import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppointmentForDoctorComponent } from './edit-appointment-for-doctor.component';

describe('EditAppointmentForDoctorComponent', () => {
  let component: EditAppointmentForDoctorComponent;
  let fixture: ComponentFixture<EditAppointmentForDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAppointmentForDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAppointmentForDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
