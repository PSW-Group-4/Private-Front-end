import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelAppointmentDialogComponent } from './cancel-appointment-dialog.component';

describe('CancelAppointmentDialogComponent', () => {
  let component: CancelAppointmentDialogComponent;
  let fixture: ComponentFixture<CancelAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelAppointmentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
