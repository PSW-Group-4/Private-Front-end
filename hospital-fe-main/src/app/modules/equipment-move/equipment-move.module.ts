import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentMoveRoutingModule } from './equipment-move-routing.module';
import { MoveEquipmentComponent } from './containers/move-equipment/move-equipment.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ShowRoomInfoComponent } from './components/show-room-info/show-room-info.component';
import { SelectEquipmentComponent } from './components/select-equipment/select-equipment.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MoveEquipmentComponent,
    ShowRoomInfoComponent,
    SelectEquipmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    EquipmentMoveRoutingModule
  ]
})
export class EquipmentMoveModule { }
