//import { AgeStatisticsComponent } from './modules/patient-statistics/age-statistics/age-statistics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/pages/home/home.component';
import { ManagerFeedbackComponent } from './modules/manager/manager-feedback/manager-feedback.component';
import { DoctorAppointmentsComponent } from './modules/doctor/doctor-appointments/doctor-appointments/doctor-appointments.component';
import { AdmissionComponent } from './admission/admission.component';
import { DoctorVacationsComponent } from './modules/doctor-vacation/doctor-vacations/doctor-vacations.component';
import { AdmissionViewComponent } from './modules/admission-view/admission-view.component';
import { DoctorBloodConsumptionComponent } from './modules/doctor-blood-consumption/doctor-blood-consumption.component';
import { ManagerNewsPreviewComponent } from './modules/hospital/manager-news-preview/manager-news-preview.component';
import { ManagerRootComponent } from './modules/manager/manager-root/manager-root.component';
import { LoginComponent } from './modules/login/login.component';
import { IncognitoGuard } from './auth/guards/incognito-guard.service';
import { RoleGuardService as RoleGuard } from './auth/guards/role-guard.service';
import { DoctorRootComponent } from './modules/doctor/doctor-root/doctor-root.component';
import { ManagerRoutingModule } from './modules/manager/manager-routing.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [IncognitoGuard] },
  { path: 'home', component: HomeComponent }, // Jel ovo treba nekome?
  {
    path: 'manager',
    component: ManagerRootComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'Manager' },
    loadChildren: () =>
      import('./modules/manager/manager-routing.module').then(
        (m) => m.ManagerRoutingModule
      ),
  },
  {
    path: 'doctor',
    component: DoctorRootComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'Doctor' },
    loadChildren: () =>
      import('./modules/doctor/doctor-routing.module').then(
        (m) => m.DoctorRoutingModule
      ),
  },
  { path: 'admission', component: AdmissionComponent },
  { path: 'vacations', component: DoctorVacationsComponent },
  { path: 'admissionView', component: AdmissionViewComponent },
  { path: 'bloodConsumption', component: DoctorBloodConsumptionComponent },
  { path: 'managerNews', component: ManagerNewsPreviewComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'managerFeedback', component: ManagerFeedbackComponent },
  //{ path: 'patientStatistics', component: AgeStatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  ManagerFeedbackComponent,
  DoctorAppointmentsComponent,
  DoctorBloodConsumptionComponent,
  AdmissionComponent,
  ManagerNewsPreviewComponent,
  LoginComponent,
  ManagerRootComponent,
];
