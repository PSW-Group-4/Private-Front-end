import { NumberOfPatientsByGenderDto } from './../model/numOfPatientsByGenderDto.model';
import { StatisticsService } from './../services/statistics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-statistics',
  templateUrl: './gender-statistics.component.html',
  styleUrls: ['./gender-statistics.component.css'],
})
export class GenderStatisticsComponent implements OnInit {
  service: StatisticsService;
  numOfPatientsByGender: NumberOfPatientsByGenderDto[] = [];

  constructor(service: StatisticsService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.getNumOfPatientsByGender().subscribe((res) => {
      this.numOfPatientsByGender = res;
    });
  }

  getMaleCount() {
    return this.numOfPatientsByGender[0] &&
      this.numOfPatientsByGender[0].patientCount
      ? this.numOfPatientsByGender[0].patientCount
      : null;
  }

  getFemaleCount() {
    return this.numOfPatientsByGender[1] &&
      this.numOfPatientsByGender[1].patientCount
      ? this.numOfPatientsByGender[1].patientCount
      : null;
  }
}
