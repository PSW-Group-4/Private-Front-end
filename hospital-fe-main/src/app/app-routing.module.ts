import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./modules/pages/home/home.component";
import { ManagerFeedbackComponent } from "./modules/manager/manager-feedback/manager-feedback.component";
import { DoctorAppointmentsComponent } from "./modules/doctor-appointments/doctor-appointments/doctor-appointments.component";
import { AdmissionComponent } from "./admission/admission.component";
import { DoctorVacationsComponent } from "./modules/doctor-vacation/doctor-vacations/doctor-vacations.component";
import { AdmissionViewComponent } from "./modules/admission-view/admission-view.component";
import { DoctorBloodConsumptionComponent } from "./modules/doctor-blood-consumption/doctor-blood-consumption.component";
import { ManagerNewsPreviewComponent } from "./modules/hospital/manager-news-preview/manager-news-preview.component";
import { ManagerRootComponent } from "./modules/manager/manager-root/manager-root.component";
import { LoginComponent } from "./modules/login/login.component";
import { IncognitoGuard } from "./auth/guards/incognito-guard.service";
import { RoleGuardService as RoleGuard } from "./auth/guards/role-guard.service";



const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate : [IncognitoGuard] },
  { path: 'home', component: HomeComponent }, // Jel ovo treba nekome?
  { path: 'manager', component: ManagerRootComponent, canActivate : [RoleGuard], data : {expectedRole : "Manager"} },
  { path: 'doctorAppointments', component: DoctorAppointmentsComponent, canActivate : [RoleGuard], data : {expectedRole : "Doctor"}},
  { path: 'admission', component: AdmissionComponent},
  { path: 'vacations', component: DoctorVacationsComponent},
  { path: 'admissionView', component: AdmissionViewComponent},
  { path: 'bloodConsumption', component: DoctorBloodConsumptionComponent},
  { path: 'managerNews', component: ManagerNewsPreviewComponent},
  { path: '', redirectTo:'login', pathMatch : 'full'},
];

  //{ path: '', redirectTo: 'landingPage', pathMatch: 'full' },
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  ManagerFeedbackComponent,
  DoctorAppointmentsComponent,
  DoctorBloodConsumptionComponent,
  AdmissionComponent,
  ManagerNewsPreviewComponent,
  LoginComponent,
  ManagerRootComponent
]