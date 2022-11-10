import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsComponent } from './mapDisplay/buildings/buildings.component';
import { FloorsComponent } from './mapDisplay/floors/floors.component';
import { RoomsComponent } from './mapDisplay/rooms/rooms.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const routes: Routes = [
  {   path: 'building-maps',        component: BuildingsComponent },
  {   path: 'floor-maps/:id',       component: FloorsComponent },
  {   path: 'room-maps/:id/:buildingId',        component: RoomsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes), Ng2SearchPipeModule],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
export const routingComponents = [
  BuildingsComponent,
  FloorsComponent,
  RoomsComponent
]
