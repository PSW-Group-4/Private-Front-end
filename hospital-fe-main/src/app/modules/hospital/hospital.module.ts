import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { CreateRoomComponent } from "./create-room/create-room.component";
import { RoomDetailComponent } from "./room-detail/room-detail.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { UpdateRoomComponent } from "./update-room/update-room.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { BloodBankRegistrationComponent } from './blood-bank-registration/blood-bank-registration.component';
import { BloodBanksComponent } from './blood-banks/blood-banks.component';
import { BloodBanksSubComponent } from "./blood-subscription/blood-subscription.component";
import { BloodRequestManagerComponent } from "./blood-request-manager/blood-request-manager.component";

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: CreateRoomComponent },
  { path: 'rooms/:id', component: RoomDetailComponent },  
  { path: 'rooms/:id/update', component: UpdateRoomComponent },
  { path: 'bloodBanks/add', component:  BloodBankRegistrationComponent},
  { path: 'bloodBanks', component:  BloodBanksComponent},
  { path: 'bloodBanks/subscription', component:  BloodBanksSubComponent},
  { path: 'bloodBanks/manager-request', component:  BloodRequestManagerComponent},
];

@NgModule({
  declarations: [
    RoomsComponent,
    RoomDetailComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    BloodBankRegistrationComponent,
    BloodBanksComponent,
    BloodBanksSubComponent,
    BloodRequestManagerComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class HospitalModule { }
