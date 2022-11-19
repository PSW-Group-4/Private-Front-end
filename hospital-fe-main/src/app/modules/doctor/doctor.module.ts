import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRootComponent } from './doctor-root/doctor-root.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    DoctorRootComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DoctorModule { }
