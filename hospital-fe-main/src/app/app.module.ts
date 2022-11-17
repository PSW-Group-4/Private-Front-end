import { PatientStatisticsModule } from './modules/patient-statistics/patient-statistics.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HospitalModule } from './modules/hospital/hospital.module';
import { PagesModule } from './modules/pages/pages.module';
import { ManagerFeedbackComponent } from './manager-feedback/manager-feedback.component';
import { NgChartsModule } from 'ng2-charts';
import { DoctorAppointmentsModule } from './modules/doctor-appointments/doctor-appointments.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MapsModule } from './modules/maps/maps.module';
import { CommonModule } from '@angular/common';
import {
  BloodBanksComponent,
  CheckBloodSuppliesDialog,
} from './modules/hospital/blood-banks/blood-banks.component';
import { AdmissionComponent } from './admission/admission.component';
import { DoctorVacationModule } from './modules/doctor-vacation/doctor-vacation.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DoctorBloodConsumptionComponent } from './modules/doctor-blood-consumption/doctor-blood-consumption.component';
import { CreateBloodConsumptionRecordComponent } from './modules/doctor-blood-consumption/create-blood-consumption-record/create-blood-consumption-record.component';
import { RequestMoreBloodComponent } from './modules/doctor-blood-consumption/request-more-blood/request-more-blood.component';
import { AdmissionViewComponent } from './modules/admission-view/admission-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerFeedbackComponent,
    CheckBloodSuppliesDialog,
    AdmissionViewComponent,
    DoctorBloodConsumptionComponent,
    CreateBloodConsumptionRecordComponent,
    RequestMoreBloodComponent,
    AdmissionComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    PagesModule,
    HospitalModule,
    MatNativeDateModule,
    PatientStatisticsModule,
    NgChartsModule,
    Ng2SearchPipeModule,
    DoctorAppointmentsModule,
    MapsModule,
    DoctorVacationModule,
  ],
  providers: [],
  bootstrap: [AppComponent, BloodBanksComponent],
})
export class AppModule {}
