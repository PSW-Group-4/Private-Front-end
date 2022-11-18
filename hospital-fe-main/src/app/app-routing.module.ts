import { ManagerVacationComponent } from './modules/maps/containers/managerVacations/manager-vacation/manager-vacation.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./modules/pages/home/home.component";
import { ManagerFeedbackComponent } from "./manager-feedback/manager-feedback.component";
import { DoctorAppointmentsComponent } from "./modules/doctor-appointments/doctor-appointments/doctor-appointments.component";
import { AdmissionComponent } from "./admission/admission.component";
import { DoctorVacationsComponent } from "./modules/doctor-vacation/doctor-vacations/doctor-vacations.component";
import { AdmissionViewComponent } from "./modules/admission-view/admission-view.component";
import { DoctorBloodConsumptionComponent } from "./modules/doctor-blood-consumption/doctor-blood-consumption.component";
import { ManagerNewsPreviewComponent } from "./modules/hospital/manager-news-preview/manager-news-preview.component";



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'managerFeedback', component: ManagerFeedbackComponent },
  { path: 'doctorAppointments', component: DoctorAppointmentsComponent},
  { path: 'admission', component: AdmissionComponent},
  { path: 'vacations', component: DoctorVacationsComponent},
  { path: 'admissionView', component: AdmissionViewComponent},
  { path: 'bloodConsumption', component: DoctorBloodConsumptionComponent},
  { path: 'managerNews', component: ManagerNewsPreviewComponent},
  { path: 'managerVacation', component: ManagerVacationComponent}
];

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
  ManagerVacationComponent
]