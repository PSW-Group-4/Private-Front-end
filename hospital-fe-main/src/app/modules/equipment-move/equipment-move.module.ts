import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentMoveRoutingModule } from './equipment-move-routing.module';
import { MoveEquipmentComponent } from './containers/move-equipment/move-equipment.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ShowRoomInfoComponent } from './components/show-room-info/show-room-info.component';
import { SelectEquipmentComponent } from './components/select-equipment/select-equipment.component';



@NgModule({
  declarations: [
    MoveEquipmentComponent,
    ShowRoomInfoComponent,
    SelectEquipmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EquipmentMoveRoutingModule
  ]
})
export class EquipmentMoveModule { }
