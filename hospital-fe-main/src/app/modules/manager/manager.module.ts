import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRootComponent } from './manager-root/manager-root.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AgeStatisticsComponent } from './patient-statistics/age-statistics/age-statistics.component';
import { BarChartGenderComponent } from './patient-statistics/bar-chart-gender/bar-chart-gender.component';
import { BarChartComponent } from './patient-statistics/bar-chart/bar-chart.component';
import { GenderStatisticsComponent } from './patient-statistics/gender-statistics/gender-statistics.component';
import { MaterialModule } from 'src/app/material/material.module';
import { StatisticsService } from './patient-statistics/services/statistics.service';
import { ReportConfigsComponent } from './report-configs/report-configs.component';
import { FormsModule } from '@angular/forms';
import { ManagerVacationsComponent } from './manager-vacations/manager-vacations.component';
import { CommentComponent } from './manager-vacations/comment/comment/comment.component';
import { VacationStatisticsComponent } from './manager-vacations/vacation-statistics/vacation-statistics/vacation-statistics.component';
import { NgChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ManagerRootComponent,
    GenderStatisticsComponent,
    AgeStatisticsComponent,
    BarChartComponent,
    BarChartGenderComponent,
    ReportConfigsComponent,
    ManagerVacationsComponent,
    CommentComponent,
    VacationStatisticsComponent,
  ],
  imports: [CommonModule, AppRoutingModule, MaterialModule, FormsModule, NgChartsModule, MatTableModule],
  providers: [StatisticsService],
})
export class ManagerModule { }
