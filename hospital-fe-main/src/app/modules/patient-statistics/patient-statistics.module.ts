import { MaterialModule } from './../../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderStatisticsComponent } from './gender-statistics/gender-statistics.component';
import { AgeStatisticsComponent } from './age-statistics/age-statistics.component';

@NgModule({
  declarations: [GenderStatisticsComponent, AgeStatisticsComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
})
export class PatientStatisticsModule {}
