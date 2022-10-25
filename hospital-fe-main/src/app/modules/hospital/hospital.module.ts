import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { CreateRoomComponent } from "./create-room/create-room.component";
import { RoomDetailComponent } from "./room-detail/room-detail.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { UpdateRoomComponent } from "./update-room/update-room.component";
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctorCurrentAppComponent } from './doctor-current-app/doctor-current-app.component';
import { DoctorPastAppComponent } from './doctor-past-app/doctor-past-app.component';
import { AddAppointmentForDoctorComponent } from './add-appointment-for-doctor/add-appointment-for-doctor.component';
import { EditAppointmentForDoctorComponent } from './edit-appointment-for-doctor/edit-appointment-for-doctor.component';
import { DeleteAppointmentForDoctorComponent } from './delete-appointment-for-doctor/delete-appointment-for-doctor.component';

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: CreateRoomComponent },
  { path: 'rooms/:id', component: RoomDetailComponent },  
  { path: 'rooms/:id/update', component: UpdateRoomComponent },
  { path: 'doctorAppointments', component: DoctorAppointmentsComponent },
];

@NgModule({
  declarations: [
    RoomsComponent,
    RoomDetailComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    DoctorAppointmentsComponent,
    DoctorCurrentAppComponent,
    DoctorPastAppComponent,
    AddAppointmentForDoctorComponent,
    EditAppointmentForDoctorComponent,
    DeleteAppointmentForDoctorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class HospitalModule { }
