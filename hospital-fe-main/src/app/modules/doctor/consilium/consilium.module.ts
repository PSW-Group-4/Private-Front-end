import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorConsiliumsComponent } from './doctor-consiliums/doctor-consiliums.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddConsiliumDialogComponent } from './add-consilium-dialog/add-consilium-dialog.component';
import { ConsiliumDoctorListDialogComponent } from './doctor-consiliums/consilium-doctor-list-dialog/consilium-doctor-list-dialog.component';



@NgModule({
  declarations: [
    DoctorConsiliumsComponent,
    AddConsiliumDialogComponent,
    ConsiliumDoctorListDialogComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ConsiliumModule { }
