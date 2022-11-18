import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptAppointmentScheduleDialogComponent } from './accept-appointment-schedule-dialog.component';

describe('AcceptAppointmentScheduleDialogComponent', () => {
  let component: AcceptAppointmentScheduleDialogComponent;
  let fixture: ComponentFixture<AcceptAppointmentScheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptAppointmentScheduleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptAppointmentScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
