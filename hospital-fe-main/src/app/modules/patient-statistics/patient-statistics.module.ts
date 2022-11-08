import { MaterialModule } from './../../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderStatisticsComponent } from './gender-statistics/gender-statistics.component';
import { AgeStatisticsComponent } from './age-statistics/age-statistics.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BarChartGenderComponent } from './bar-chart-gender/bar-chart-gender.component';

@NgModule({
  declarations: [
    GenderStatisticsComponent,
    AgeStatisticsComponent,
    BarChartComponent,
    BarChartGenderComponent,
  ],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
})
export class PatientStatisticsModule {}
