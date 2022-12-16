import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentMoveRoutingModule } from './equipment-move-routing.module';
import { MoveEquipmentComponent } from './containers/move-equipment/move-equipment.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SelectEquipmentComponent } from './components/select-equipment/select-equipment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MoveEquipmentComponent,
    SelectEquipmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    EquipmentMoveRoutingModule
  ]
})
export class EquipmentMoveModule { }
