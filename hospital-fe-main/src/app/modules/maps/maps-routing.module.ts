import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsComponent } from './mapDisplay/buildings/buildings.component';
import { FloorsComponent } from './mapDisplay/floors/floors.component';
import { RoomsComponent } from './mapDisplay/rooms/rooms.component';

const routes: Routes = [
  {   path: 'building-maps',        component: BuildingsComponent },
  {   path: 'floor-maps/:id',       component: FloorsComponent },
  {   path: 'room-maps/:id',        component: RoomsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
export const routingComponents = [
  BuildingsComponent,
  FloorsComponent,
  RoomsComponent
]
