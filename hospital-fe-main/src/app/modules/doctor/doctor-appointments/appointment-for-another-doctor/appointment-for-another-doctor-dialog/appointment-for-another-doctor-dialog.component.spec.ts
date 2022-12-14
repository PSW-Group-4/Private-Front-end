import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentForAnotherDoctorDialogComponent } from './appointment-for-another-doctor-dialog.component';

describe('AppointmentForAnotherDoctorDialogComponent', () => {
  let component: AppointmentForAnotherDoctorDialogComponent;
  let fixture: ComponentFixture<AppointmentForAnotherDoctorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentForAnotherDoctorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentForAnotherDoctorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
