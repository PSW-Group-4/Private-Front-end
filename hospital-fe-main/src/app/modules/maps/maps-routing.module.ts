import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsComponent } from './mapDisplay/buildings/buildings.component';
import { FloorsComponent } from './mapDisplay/floors/floors.component';
import { RoomsComponent } from './mapDisplay/rooms/rooms.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MapsMainContainerComponent } from './containers/maps-main-container/maps-main-container.component';
import { RoleGuardService } from 'src/app/auth/guards/role-guard.service';



const routes: Routes = [
  { path: '', component: BuildingsComponent },
  { path: 'building/:buildingId/floor/:id', component: RoomsComponent},
  { path: 'building/:id', component: FloorsComponent}
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
