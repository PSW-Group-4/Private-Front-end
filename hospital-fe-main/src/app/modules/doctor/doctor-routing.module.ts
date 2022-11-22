import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRootComponent } from './doctor-root/doctor-root.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments/doctor-appointments.component';
import { DoctorBloodConsumptionComponent } from './doctor-blood-consumption/doctor-blood-consumption.component';
import { AdmissionViewComponent } from './admission-view/admission-view.component';
import { AdmissionComponent } from './admission/admission.component';

const routes: Routes = [
  { path: 'appointments', component: DoctorAppointmentsComponent},
  { path: 'bloodConsumption', component: DoctorBloodConsumptionComponent},
  { path: 'admission', component: AdmissionComponent },
  { path: 'admissionView', component: AdmissionViewComponent }
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