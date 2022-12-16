//import { PatientStatisticsModule } from './modules/patient-statistics/patient-statistics.module';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HospitalModule } from './modules/hospital/hospital.module';
import { PagesModule } from './modules/pages/pages.module';
import { ManagerFeedbackComponent } from './modules/manager/manager-feedback/manager-feedback.component';
import { DoctorAppointmentsModule } from "./modules/doctor/doctor-appointments/doctor-appointments.module";
import { MatNativeDateModule } from "@angular/material/core";
import { MapsModule } from "./modules/maps/maps.module";
import { CommonModule } from '@angular/common';
import { BloodBanksSubComponent, AddSubscriptionDialog } from './modules/hospital/blood-subscription/blood-subscription.component'
import { BloodRequestManagerComponent, AddManagerRequestDialog} from './modules/hospital/blood-request-manager/blood-request-manager.component';
import { BloodBanksComponent, CheckBloodSuppliesDialog } from './modules/manager/blood-banks/blood-banks.component';
import { AdmissionComponent } from './modules/doctor/admission/admission.component';
//import { DoctorVacationModule } from "./modules/doctor-vacation/doctor-vacation.module";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { DoctorBloodConsumptionComponent } from './modules/doctor/doctor-blood-consumption/doctor-blood-consumption.component';
import { CreateBloodConsumptionRecordComponent } from './modules/doctor/doctor-blood-consumption/create-blood-consumption-record/create-blood-consumption-record.component';
import { RequestMoreBloodComponent } from './modules/doctor/doctor-blood-consumption/request-more-blood/request-more-blood.component';
import { AdmissionViewComponent } from "./modules/doctor/admission-view/admission-view.component";
import { EquipmentMoveModule } from "./modules/equipment-move/equipment-move.module";
import { ManagerNewsPreviewComponent } from './modules/manager/manager-news-preview/manager-news-preview.component';
import { ManagerModule } from './modules/manager/manager.module';
import { LoginModule } from './modules/login/login.module';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ManagerRoutingModule } from './modules/manager/manager-routing.module';
import { DoctorRoutingModule } from './modules/doctor/doctor-routing.module';
import { DoctorRootComponent } from './modules/doctor/doctor-root/doctor-root.component';
import { DoctorModule } from './modules/doctor/doctor.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BloodRequestsModule } from './modules/blood-requests/blood-requests.module';
import { RoomRenovationModule } from './modules/room-renovation/room-renovation.module';
import { CreateTenderComponent } from './modules/manager/create-tender/create-tender.component';
import { ManagerBlockingUserModule } from './modules/manager/manager-blocking-user/manager-blocking-user.module';
import { MatTableModule } from '@angular/material/table';
import { DoctorVacationModule } from './modules/doctor/doctor-vacation/doctor-vacation.module';
import { ViewAllTendersForReviewComponent } from './modules/tenders/view-all-tenders-for-review/view-all-tenders-for-review.component';
import { TenderApplicationsForReviewComponent } from './modules/tender-applications/tender-applications-for-review/tender-applications-for-review/tender-applications-for-review.component';
import { RoomScheduleComponent } from './modules/roomSchedule/room-schedule/room-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerFeedbackComponent,
    CheckBloodSuppliesDialog,
    AddSubscriptionDialog,
    AddManagerRequestDialog,
    AdmissionViewComponent,
    DoctorBloodConsumptionComponent,
    CreateBloodConsumptionRecordComponent,
    RequestMoreBloodComponent,
    AdmissionComponent,
    ManagerNewsPreviewComponent,
    CreateTenderComponent,
    ViewAllTendersForReviewComponent,
    TenderApplicationsForReviewComponent,
    RoomScheduleComponent,
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
    MatButtonModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    PagesModule,
    HospitalModule,
    MatNativeDateModule,
    Ng2SearchPipeModule,
    DoctorAppointmentsModule,
    MapsModule,
    EquipmentMoveModule,
    DoctorVacationModule,
    LoginModule,
    ManagerModule,
    ManagerRoutingModule,
    DoctorModule,
    DoctorRoutingModule,
    FlexLayoutModule,
    BloodRequestsModule,
    RoomRenovationModule,
    NgChartsModule,
    MatTableModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },

  ],
  bootstrap: [AppComponent, BloodBanksComponent, BloodBanksSubComponent, BloodRequestManagerComponent],
})
export class AppModule { }
