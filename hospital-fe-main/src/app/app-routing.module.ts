import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./modules/pages/home/home.component";
import { ManagerFeedbackComponent } from "./manager-feedback/manager-feedback.component";
import { DoctorAppointmentsComponent } from "./modules/doctor-appointments/doctor-appointments/doctor-appointments.component";
import { ManagerRequestReviewComponent } from "./modules/blood-requests/manager-request-review/manager-request-review.component";
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'managerFeedback', component: ManagerFeedbackComponent },
  { path: 'doctorAppointments', component: DoctorAppointmentsComponent},
  { path: 'viewRequests', component: ManagerRequestReviewComponent},
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
]