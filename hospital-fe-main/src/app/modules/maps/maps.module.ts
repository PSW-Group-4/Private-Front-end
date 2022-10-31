import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditItemComponent } from './containers/edit-item/edit-item.component';
import { MapItemInformationComponent } from './components/map-item-information/map-item-information.component';
import { MapsRoutingModule } from './maps-routing.module';



@NgModule({
  declarations: [
    EditItemComponent,
    MapItemInformationComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
