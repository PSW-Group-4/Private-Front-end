import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveEquipmentComponent } from './containers/move-equipment/move-equipment.component';

const routes: Routes = [
  {   
    path: 'move-equipment', component: MoveEquipmentComponent,
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquipmentMoveRoutingModule { }
export const routingComponents = [
    MoveEquipmentComponent
]
