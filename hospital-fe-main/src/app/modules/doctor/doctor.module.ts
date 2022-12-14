import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRootComponent } from './doctor-root/doctor-root.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { DischargeAdmissionDialogComponent } from './admission-view/discharge-admission-dialog/discharge-admission-dialog.component';
import { AdmissionHistoryComponent } from './admission-view/admission-history/admission-history.component';
import { MatTableModule } from '@angular/material/table';
import { TreatmentDialogComponent } from './admission-view/admission-history/treatment-dialog/treatment-dialog.component';
import { UpdateTreatmentDialogComponent } from './admission-view/update-treatment-dialog/update-treatment-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { ConsiliumModule } from './consilium/consilium.module';
import { DoctorVacationModule } from './doctor-vacation/doctor-vacation.module';
import { CreateReportComponent } from './report/create-report/create-report.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatList, MatListModule } from '@angular/material/list';
import { ShowReportsComponent } from './report/show-reports/show-reports.component';
import { ChoosePdfOptionsDialogComponent } from './report/choose-pdf-options-dialog/choose-pdf-options-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    DoctorRootComponent,
    DischargeAdmissionDialogComponent,
    AdmissionHistoryComponent,
    TreatmentDialogComponent,
    UpdateTreatmentDialogComponent,
    CreateReportComponent,
    ShowReportsComponent,
    ChoosePdfOptionsDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ConsiliumModule,
    //DoctorVacationModule,
    MatInputModule,
    FormsModule,
    MatStepperModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule
  ]
})
export class DoctorModule { }
