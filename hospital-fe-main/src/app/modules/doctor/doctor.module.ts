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
import { UpdateTreatmentDialogComponent } from './admission-view/update-treatment-dialog/update-treatment-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DoctorRootComponent,
    DischargeAdmissionDialogComponent,
    AdmissionHistoryComponent,
    TreatmentDialogComponent,
    UpdateTreatmentDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
    
    
  ]
  
})
export class DoctorModule { }
