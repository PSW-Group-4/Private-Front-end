import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditItemComponent } from './containers/edit-item/edit-item.component';
import { MapItemInformationComponent } from './components/map-item-information/map-item-information.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MaterialModule } from './../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildingsComponent } from './mapDisplay/buildings/buildings.component';


@NgModule({
  declarations: [
    EditItemComponent,
    MapItemInformationComponent,
    BuildingsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ]
})
export class MapsModule { }
