import { AgeStatisticsComponent } from './modules/patient-statistics/age-statistics/age-statistics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/pages/home/home.component';
import { ManagerFeedbackComponent } from './manager-feedback/manager-feedback.component';
import { DoctorAppointmentsComponent } from './modules/doctor-appointments/doctor-appointments/doctor-appointments.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'managerFeedback', component: ManagerFeedbackComponent },
  { path: 'doctorAppointments', component: DoctorAppointmentsComponent },
  { path: 'patientStatistics', component: AgeStatisticsComponent },
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
];
