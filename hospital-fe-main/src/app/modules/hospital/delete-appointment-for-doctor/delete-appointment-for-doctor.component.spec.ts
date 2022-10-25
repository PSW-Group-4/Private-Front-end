import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAppointmentForDoctorComponent } from './delete-appointment-for-doctor.component';

describe('DeleteAppointmentForDoctorComponent', () => {
  let component: DeleteAppointmentForDoctorComponent;
  let fixture: ComponentFixture<DeleteAppointmentForDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAppointmentForDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAppointmentForDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
