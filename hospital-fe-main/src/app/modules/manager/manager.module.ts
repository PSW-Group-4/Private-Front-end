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
import { CreateAppointmentStatisticsComponent } from './create-appointment-statistics/create-appointment-statistics.component';
import { StepClickCountPerSessionComponent } from './create-appointment-statistics/step-click-count-per-session/step-click-count-per-session.component';
import { TimeSpentOnStepPerSessionComponent } from './create-appointment-statistics/time-spent-on-step-per-session/time-spent-on-step-per-session.component';
import { TimeSpentOnSessionPerAgeGroupComponent } from './create-appointment-statistics/time-spent-on-session-per-age-group/time-spent-on-session-per-age-group.component';
import { StepsOnSessionPerAgeGroupComponent } from './create-appointment-statistics/steps-on-session-per-age-group/steps-on-session-per-age-group.component';
import { ScheduleSuccessRatePerAgeGroupComponent } from './create-appointment-statistics/schedule-success-rate-per-age-group/schedule-success-rate-per-age-group.component';
import { ChosenDoctorCountPerDoctorComponent } from './create-appointment-statistics/chosen-doctor-count-per-doctor/chosen-doctor-count-per-doctor.component';
import { ReportStatisticsComponent } from './report-statistics/report-statistics.component';
import { NumberStepsComponent } from './report-statistics/number-steps/number-steps.component';
import { NumberEachStepComponent } from './report-statistics/number-each-step/number-each-step.component';
import { TimeStepsComponent } from './report-statistics/time-steps/time-steps.component';
import { TimeEachStepComponent } from './report-statistics/time-each-step/time-each-step.component';
import { DoctorTimeStepsComponent } from './report-statistics/doctor-time-steps/doctor-time-steps.component';
import { DoctorTimeStepsChartComponent } from './report-statistics/doctor-time-steps-chart/doctor-time-steps-chart.component';
import { TimeEachStepChartComponent } from './report-statistics/time-each-step-chart/time-each-step-chart.component';
import { TimeStepsChartComponent } from './report-statistics/time-steps-chart/time-steps-chart.component';
import { NumberStepsChartComponent } from './report-statistics/number-steps-chart/number-steps-chart.component';
import { NumberEachStepChartComponent } from './report-statistics/number-each-step-chart/number-each-step-chart.component';


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
    CreateAppointmentStatisticsComponent,
    StepClickCountPerSessionComponent,
    TimeSpentOnStepPerSessionComponent,
    TimeSpentOnSessionPerAgeGroupComponent,
    StepsOnSessionPerAgeGroupComponent,
    ScheduleSuccessRatePerAgeGroupComponent,
    ChosenDoctorCountPerDoctorComponent,
    ReportStatisticsComponent,
    NumberStepsComponent,
    NumberEachStepComponent,
    TimeStepsComponent,
    TimeEachStepComponent,
    DoctorTimeStepsComponent,
    DoctorTimeStepsChartComponent,
    TimeEachStepChartComponent,
    TimeStepsChartComponent,
    NumberStepsChartComponent,
    NumberEachStepChartComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    NgChartsModule,
    MatTableModule,
    
  ],
  providers: [StatisticsService],
})
export class ManagerModule {}
