import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditAppointmentDialogComponent } from './add-or-edit-appointment-dialog.component';

describe('AddOrEditAppointmentDialogComponent', () => {
  let component: AddOrEditAppointmentDialogComponent;
  let fixture: ComponentFixture<AddOrEditAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditAppointmentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrEditAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
