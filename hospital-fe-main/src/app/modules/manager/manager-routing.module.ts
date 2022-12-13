import { VacationStatisticsComponent } from './manager-vacations/vacation-statistics/vacation-statistics/vacation-statistics.component';
import { ManagerVacationsComponent } from './manager-vacations/manager-vacations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveEquipmentComponent } from '../equipment-move/containers/move-equipment/move-equipment.component';
import { MapsMainContainerComponent } from '../maps/containers/maps-main-container/maps-main-container.component';
import { ManagerFeedbackComponent } from './manager-feedback/manager-feedback.component';
import { ManagerRootComponent } from './manager-root/manager-root.component';
import { AgeStatisticsComponent } from './patient-statistics/age-statistics/age-statistics.component';
import { ReportConfigsComponent } from './report-configs/report-configs.component';
import { RoomRenovationComponent } from '../room-renovation/containers/room-renovation/room-renovation.component';
import { ManagerBlockingUserComponent } from './manager-blocking-user/manager-blocking-user/manager-blocking-user.component';
import { BloodBanksComponent } from '../hospital/blood-banks/blood-banks.component';
import { BloodBanksSubComponent } from '../hospital/blood-subscription/blood-subscription.component';
import { BloodRequestManagerComponent } from '../hospital/blood-request-manager/blood-request-manager.component';

const routes: Routes = [
  { path: 'feedbacks', component: ManagerFeedbackComponent },
  { path: 'user-blocking', component: ManagerBlockingUserComponent },
  { path: 'patientStatistics', component: AgeStatisticsComponent },
  { path: 'report-configs', component: ReportConfigsComponent },
  {
    path: 'maps', component: MapsMainContainerComponent,
    loadChildren: () =>
      import('../maps/maps-routing.module').then(
        (m) => m.MapsRoutingModule
      ),
  },
  {
    path: 'move-equipment', component: MoveEquipmentComponent,
    loadChildren: () =>
      import('../equipment-move/equipment-move-routing.module').then(
        (m) => m.EquipmentMoveRoutingModule
      ),
  },
  { path: 'vacationRequests', component: ManagerVacationsComponent},
  { path: 'room-renovation', component: RoomRenovationComponent },
  { path: 'managerStatistics', component: VacationStatisticsComponent },
  { path: 'blood-banks', component: BloodBanksComponent },
  { path: 'blood-subscriptions', component: BloodBanksSubComponent },
  { path: 'blood-request-manager', component: BloodRequestManagerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule { }

export const routingComponents = [
  ManagerRootComponent,
  ManagerFeedbackComponent,
  AgeStatisticsComponent,
  MapsMainContainerComponent,
  ManagerVacationsComponent,
  VacationStatisticsComponent
];
