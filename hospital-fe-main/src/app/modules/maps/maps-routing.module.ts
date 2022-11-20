import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsComponent } from './mapDisplay/buildings/buildings.component';
import { FloorsComponent } from './mapDisplay/floors/floors.component';
import { RoomsComponent } from './mapDisplay/rooms/rooms.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MapsMainContainerComponent } from './containers/maps-main-container/maps-main-container.component';
import { ManagerVacationComponent } from './containers/managerVacations/manager-vacation/manager-vacation.component';


const routes: Routes = [
  {   path: 'maps', component: MapsMainContainerComponent,
      children: [{ path: 'building/:buildingId/floor/:id', component: RoomsComponent},
                 { path: 'building/:id', component: FloorsComponent},
                 { path: '', component: BuildingsComponent},
                 ]
  },
  { path: 'managerVacation', component: ManagerVacationComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes), Ng2SearchPipeModule],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
export const routingComponents = [
  BuildingsComponent,
  FloorsComponent,
  RoomsComponent,
  ManagerVacationComponent
]
