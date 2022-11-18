import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRootComponent } from './doctor-root/doctor-root.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments/doctor-appointments.component';

const routes: Routes = [
  { path: 'appointments', component: DoctorAppointmentsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],  
  exports: [RouterModule]

})
export class DoctorRoutingModule { }

export const routingComponents = [
  DoctorRootComponent,
]