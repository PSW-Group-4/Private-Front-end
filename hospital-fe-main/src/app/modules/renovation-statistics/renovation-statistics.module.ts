import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RenovationStatisticsComponent } from './containers/renovation-statistics/renovation-statistics.component';
import { FinishedUnfinishedPieChartComponent } from './components/finished-unfinished-pie-chart/finished-unfinished-pie-chart.component';
import { AverageTimeForStepsChartComponent } from './components/average-time-for-steps-chart/average-time-for-steps-chart.component';
import { AverageNumberOfBacksComponent } from './components/average-number-of-backs/average-number-of-backs.component';
import { NumberWhereSessionWereLeftOffChartComponent } from './components/number-where-session-were-left-off-chart/number-where-session-were-left-off-chart.component';
import { AverageTimeForStepsTimeframeChartComponent } from './components/average-time-for-steps-timeframe-chart/average-time-for-steps-timeframe-chart.component';



@NgModule({
  declarations: [
    RenovationStatisticsComponent,
    FinishedUnfinishedPieChartComponent,
    AverageTimeForStepsChartComponent,
    AverageNumberOfBacksComponent,
    NumberWhereSessionWereLeftOffChartComponent,
    AverageTimeForStepsTimeframeChartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class RenovationStatisticsModule { }
