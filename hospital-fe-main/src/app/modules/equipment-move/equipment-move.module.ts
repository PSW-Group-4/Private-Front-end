import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentMoveRoutingModule } from './equipment-move-routing.module';
import { MoveEquipmentComponent } from './containers/move-equipment/move-equipment.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    MoveEquipmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EquipmentMoveRoutingModule
  ]
})
export class EquipmentMoveModule { }
