import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RenovationStatisticsComponent } from './containers/renovation-statistics/renovation-statistics.component';
import { FinishedUnfinishedPieChartComponent } from './components/finished-unfinished-pie-chart/finished-unfinished-pie-chart.component';



@NgModule({
  declarations: [
    RenovationStatisticsComponent,
    FinishedUnfinishedPieChartComponent
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
