import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRootComponent } from './doctor-root/doctor-root.component';
import { RoleGuardService as RoleGuard } from 'src/app/auth/guards/role-guard.service';
import { DoctorAppointmentsComponent } from '../doctor-appointments/doctor-appointments/doctor-appointments.component';


const routes: Routes = [
  { path: 'doctor', component: DoctorRootComponent, canActivate: [RoleGuard], data:{expectedRole: "Doctor"},
  children:[
  { path: 'appointments', component: DoctorAppointmentsComponent}
  ]},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],  
  exports: [RouterModule]

})
export class DoctorRoutingModule { }

export const routingComponents = [
  DoctorRootComponent,
]