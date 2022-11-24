import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRootComponent } from './doctor-root/doctor-root.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { DischargeAdmissionDialogComponent } from './admission-view/discharge-admission-dialog/discharge-admission-dialog.component';
import { AdmissionHistoryComponent } from './admission-view/admission-history/admission-history.component';
import {MatTableModule} from '@angular/material/table';
import { TreatmentDialogComponent } from './admission-view/admission-history/treatment-dialog/treatment-dialog.component';



@NgModule({
  declarations: [
    DoctorRootComponent,
    DischargeAdmissionDialogComponent,
    AdmissionHistoryComponent,
    TreatmentDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule
  ]
})
export class DoctorModule { }
