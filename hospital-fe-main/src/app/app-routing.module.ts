import { AgeStatisticsComponent } from './modules/patient-statistics/age-statistics/age-statistics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { ManagerFeedbackComponent } from './manager-feedback/manager-feedback.component';
import { DoctorAppointmentsComponent } from './modules/doctor-appointments/doctor-appointments/doctor-appointments.component';
import { AdmissionComponent } from './admission/admission.component';
import { DoctorVacationsComponent } from './modules/doctor-vacation/doctor-vacations/doctor-vacations.component';
import { AdmissionViewComponent } from './modules/admission-view/admission-view.component';
import { DoctorBloodConsumptionComponent } from './modules/doctor-blood-consumption/doctor-blood-consumption.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'managerFeedback', component: ManagerFeedbackComponent },
  { path: 'doctorAppointments', component: DoctorAppointmentsComponent },
  { path: 'patientStatistics', component: AgeStatisticsComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'vacations', component: DoctorVacationsComponent },
  { path: 'admissionView', component: AdmissionViewComponent },
  { path: 'bloodConsumption', component: DoctorBloodConsumptionComponent },
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
];
