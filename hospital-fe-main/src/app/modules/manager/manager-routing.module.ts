import { ManagerVacationComponent } from './../maps/containers/managerVacations/manager-vacation/manager-vacation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveEquipmentComponent } from '../equipment-move/containers/move-equipment/move-equipment.component';
import { MapsMainContainerComponent } from '../maps/containers/maps-main-container/maps-main-container.component';
import { ManagerFeedbackComponent } from './manager-feedback/manager-feedback.component';
import { ManagerRootComponent } from './manager-root/manager-root.component';
import { AgeStatisticsComponent } from './patient-statistics/age-statistics/age-statistics.component';

const routes: Routes = [
  { path: 'feedbacks', component: ManagerFeedbackComponent },
  { path: 'patientStatistics', component: AgeStatisticsComponent },
  { path: 'maps', component: MapsMainContainerComponent,
    loadChildren: () =>
        import('../maps/maps-routing.module').then(
          (m) => m.MapsRoutingModule
        ),
  },
  { path: 'move-equipment', component: MoveEquipmentComponent,
    loadChildren: () =>
        import('../equipment-move/equipment-move-routing.module').then(
          (m) => m.EquipmentMoveRoutingModule
        ),
  },
  { path: 'vacationApproval', component: ManagerVacationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}

export const routingComponents = [
  ManagerRootComponent,
  ManagerFeedbackComponent,
  AgeStatisticsComponent,
  MapsMainContainerComponent,
  ManagerVacationComponent
];
