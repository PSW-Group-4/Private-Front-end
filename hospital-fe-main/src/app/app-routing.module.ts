import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./modules/pages/home/home.component";
import { ManagerFeedbackComponent } from "./manager-feedback/manager-feedback.component";
import { DoctorAppointmentsComponent } from "./modules/doctor-appointments/doctor-appointments/doctor-appointments.component";
import { MapComponent } from "./modules/maps/mapDisplay/map/map.component";
import { BuildingsComponent } from "./modules/maps/mapDisplay/buildings/buildings.component";
import { FloorsComponent } from "./modules/maps/mapDisplay/floors/floors.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'managerFeedback', component: ManagerFeedbackComponent },
  { path: 'doctorAppointments', component: DoctorAppointmentsComponent},
  { path: 'mapDisplay', component: MapComponent},
  { path: 'buildings', component: BuildingsComponent},
  { path: 'floors/:id', component: FloorsComponent},
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
  MapComponent,
  BuildingsComponent,
  FloorsComponent
]