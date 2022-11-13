import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./modules/pages/home/home.component";
import { ManagerFeedbackComponent } from "./manager-feedback/manager-feedback.component";
import { DoctorAppointmentsComponent } from "./modules/doctor-appointments/doctor-appointments/doctor-appointments.component";
import { ManagerRequestReviewComponent } from "./modules/blood-requests/manager-request-review/manager-request-review.component";
import { AdmissionComponent } from "./admission/admission.component";
import { DoctorVacationsComponent } from "./modules/doctor-vacation/doctor-vacations/doctor-vacations.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'managerFeedback', component: ManagerFeedbackComponent },
  { path: 'doctorAppointments', component: DoctorAppointmentsComponent},
  { path: 'viewRequests', component: ManagerRequestReviewComponent},
  { path: 'admission', component: AdmissionComponent},
  { path: 'vacations', component: DoctorVacationsComponent},

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
  ManagerRequestReviewComponent,
  AdmissionComponent
]