import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRootComponent } from './doctor-root/doctor-root.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { DischargeAdmissionDialogComponent } from './admission-view/discharge-admission-dialog/discharge-admission-dialog.component';



@NgModule({
  declarations: [
    DoctorRootComponent,
    DischargeAdmissionDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule
  ]
})
export class DoctorModule { }
