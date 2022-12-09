import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorVacationsComponent } from './doctor-vacations/doctor-vacations.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVacationDialogComponent } from './add-vacation-dialog/add-vacation-dialog.component';
import { VacationSchedulerComponent } from './vacation-scheduler/vacation-scheduler.component';
import { CancelVacationRequestDialogComponent } from './cancel-vacation-request-dialog/cancel-vacation-request-dialog.component';



@NgModule({
  declarations: [
    DoctorVacationsComponent,
    AddVacationDialogComponent,
    VacationSchedulerComponent,
    CancelVacationRequestDialogComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DoctorVacationModule { }
