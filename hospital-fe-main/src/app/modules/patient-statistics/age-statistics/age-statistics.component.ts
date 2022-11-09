import { StatisticsService } from './../services/statistics.service';
import { Component, OnInit } from '@angular/core';
import { DoctorDto } from '../model/doctorDto.model';

@Component({
  selector: 'app-age-statistics',
  templateUrl: './age-statistics.component.html',
  styleUrls: ['./age-statistics.component.css'],
})
export class AgeStatisticsComponent implements OnInit {
  service: StatisticsService;
  doctors: DoctorDto[] = [];
  numOfPatientsByAgreGroup: any;

  constructor(service: StatisticsService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.doctors = this.service.getAllDoctors();
    this.numOfPatientsByAgreGroup = this.service.getNumOfPatientsByAgeGroup();
  }

  changeStatistics(input: string) {
    if (input !== 'all') {
      input = input.toString();
    }
    this.numOfPatientsByAgreGroup =
      this.service.getNumOfPatientsByAgeGroupByDoctor(input);
  }
}
