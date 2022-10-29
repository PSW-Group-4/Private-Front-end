import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule,routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HospitalModule } from "./modules/hospital/hospital.module";
import { PagesModule } from "./modules/pages/pages.module";
import { ManagerFeedbackComponent } from './manager-feedback/manager-feedback.component';
import { DoctorAppointmentsModule } from "./modules/doctor-appointments/doctor-appointments.module";
import { MapComponent } from './modules/maps/mapDisplay/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerFeedbackComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,

    PagesModule,
    HospitalModule,
    
    DoctorAppointmentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
