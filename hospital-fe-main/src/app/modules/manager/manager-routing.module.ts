import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerFeedbackComponent } from './manager-feedback/manager-feedback.component';
import { ManagerRootComponent } from './manager-root/manager-root.component';
import { AgeStatisticsComponent } from './patient-statistics/age-statistics/age-statistics.component';

const routes: Routes = [
  { path: 'feedbacks', component: ManagerFeedbackComponent },
  { path: 'patientStatistics', component: AgeStatisticsComponent },
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
];
