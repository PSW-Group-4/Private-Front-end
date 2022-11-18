import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HospitalModule } from "./modules/hospital/hospital.module";
import { PagesModule } from "./modules/pages/pages.module";
import { ManagerFeedbackComponent } from './modules/manager/manager-feedback/manager-feedback.component';
import { DoctorAppointmentsModule } from "./modules/doctor/doctor-appointments/doctor-appointments.module";
import { MatNativeDateModule } from "@angular/material/core";
import { MapsModule } from "./modules/maps/maps.module";
import { CommonModule } from '@angular/common'; 
import { BloodBanksComponent, CheckBloodSuppliesDialog } from './modules/hospital/blood-banks/blood-banks.component';
import { AdmissionComponent } from './admission/admission.component';
import { DoctorVacationModule } from "./modules/doctor-vacation/doctor-vacation.module";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { DoctorBloodConsumptionComponent } from './modules/doctor-blood-consumption/doctor-blood-consumption.component';
import { CreateBloodConsumptionRecordComponent } from './modules/doctor-blood-consumption/create-blood-consumption-record/create-blood-consumption-record.component';
import { RequestMoreBloodComponent } from './modules/doctor-blood-consumption/request-more-blood/request-more-blood.component';
import { AdmissionViewComponent } from "./modules/admission-view/admission-view.component";
import { ManagerNewsPreviewComponent } from './modules/hospital/manager-news-preview/manager-news-preview.component';
import { ManagerModule } from "./modules/manager/manager.module";
import { LoginModule } from "./modules/login/login.module";
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { AuthInterceptor } from "./auth/auth.interceptor";
import { ManagerRoutingModule } from "./modules/manager/manager-routing.module";
import { DoctorRoutingModule } from "./modules/doctor/doctor-routing.module";
import { DoctorRootComponent } from "./modules/doctor/doctor-root/doctor-root.component";
import { DoctorModule } from "./modules/doctor/doctor.module";


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
    ManagerNewsPreviewComponent

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
    Ng2SearchPipeModule,
    DoctorAppointmentsModule,
    MapsModule,
    DoctorVacationModule,
    LoginModule,
    ManagerModule,
    ManagerRoutingModule,
    DoctorModule,
    DoctorRoutingModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
      JwtHelperService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent, BloodBanksComponent]
})
export class AppModule { }
