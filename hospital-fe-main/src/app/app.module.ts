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
import { DoctorAppointmentsModule } from './modules/doctor-appointments/doctor-appointments.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MapsModule } from './modules/maps/maps.module';
import { CommonModule } from '@angular/common';
import {
  BloodBanksComponent,
  CheckBloodSuppliesDialog,
} from './modules/hospital/blood-banks/blood-banks.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerFeedbackComponent,
    CheckBloodSuppliesDialog,
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

    DoctorAppointmentsModule,
    MapsModule,
    PatientStatisticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, BloodBanksComponent],
})
export class AppModule {}
