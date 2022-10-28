import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctorSchedulerComponent } from './doctor-scheduler/doctor-scheduler.component';
import { CancelAppointmentDialogComponent } from './cancel-appointment-dialog/cancel-appointment-dialog.component';
import { AddOrEditAppointmentDialogComponent } from './add-or-edit-appointment-dialog/add-or-edit-appointment-dialog.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { AppRoutingModule } from "src/app/app-routing.module";



@NgModule({
  declarations: [
    DoctorAppointmentsComponent,
    DoctorSchedulerComponent,
    CancelAppointmentDialogComponent,
    AddOrEditAppointmentDialogComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    //RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class DoctorAppointmentsModule { }
