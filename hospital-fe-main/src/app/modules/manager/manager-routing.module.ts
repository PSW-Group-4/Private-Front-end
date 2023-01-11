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
import { BloodBanksSubComponent } from '../hospital/blood-subscription/blood-subscription.component';
import { BloodRequestManagerComponent } from '../hospital/blood-request-manager/blood-request-manager.component';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { BloodBankRegistrationComponent } from './blood-bank-registration/blood-bank-registration.component';
import { BloodBanksComponent } from './blood-banks/blood-banks.component';
import { ManagerNewsPreviewComponent } from './manager-news-preview/manager-news-preview.component';
import { ManagerRequestReviewComponent } from '../blood-requests/manager-request-review/manager-request-review.component';
import { CreateAppointmentStatisticsComponent } from './create-appointment-statistics/create-appointment-statistics.component';
import { ReportStatisticsComponent } from './report-statistics/report-statistics.component';
const routes: Routes = [
  { path: 'feedbacks', component: ManagerFeedbackComponent },
  { path: 'user-blocking', component: ManagerBlockingUserComponent },
  { path: 'patientStatistics', component: AgeStatisticsComponent },
  {
    path: 'create-appointment-statistics',
    component: CreateAppointmentStatisticsComponent,
  },
  { path: 'report-configs', component: ReportConfigsComponent },
  { path: 'tenders/create', component: CreateTenderComponent },
  { path: 'bloodBanks/add', component: BloodBankRegistrationComponent },
  { path: 'bloodBanks', component: BloodBanksComponent },
  { path: 'managerNews', component: ManagerNewsPreviewComponent },
  { path: 'viewRequests', component: ManagerRequestReviewComponent },
  {
    path: 'maps',
    component: MapsMainContainerComponent,
    loadChildren: () =>
      import('../maps/maps-routing.module').then((m) => m.MapsRoutingModule),
  },
  {
    path: 'move-equipment',
    component: MoveEquipmentComponent,
    loadChildren: () =>
      import('../equipment-move/equipment-move-routing.module').then(
        (m) => m.EquipmentMoveRoutingModule
      ),
  },
  { path: 'vacationRequests', component: ManagerVacationsComponent },
  { path: 'managerStatistics', component: VacationStatisticsComponent },
  { path: 'room-renovation', component: RoomRenovationComponent },
  { path: 'managerStatistics', component: VacationStatisticsComponent },
  { path: 'blood-banks', component: BloodBanksComponent },
  { path: 'blood-subscriptions', component: BloodBanksSubComponent },
  { path: 'blood-request-manager', component: BloodRequestManagerComponent},
  { path: 'reportStatistics', component: ReportStatisticsComponent},
  
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
  ManagerVacationsComponent,
  VacationStatisticsComponent,
];
