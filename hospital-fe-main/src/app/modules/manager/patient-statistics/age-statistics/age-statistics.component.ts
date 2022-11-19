import { NumberOfPatientsByGenderDto } from './../model/numOfPatientsByGenderDto.model';
import { StatisticsService } from './../services/statistics.service';
import { Component, OnInit } from '@angular/core';
import { DoctorDto } from '../model/doctorDto.model';
import { NumberOfPatientsByAgeGroupDto } from '../model/numOfPatientsByAgeGroupDto.model';

@Component({
  selector: 'app-age-statistics',
  templateUrl: './age-statistics.component.html',
  styleUrls: ['./age-statistics.component.css'],
})
export class AgeStatisticsComponent implements OnInit {
  service: StatisticsService;
  doctors: DoctorDto[] = [];
  numOfPatientsByAgreGroup: NumberOfPatientsByAgeGroupDto[] = [];
  numOfPatientsByGender: NumberOfPatientsByGenderDto[] = [];

  constructor(service: StatisticsService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.getAllDoctors().subscribe((res) => {
      this.doctors = res;
    });
    this.service.getNumOfPatientsByAgeGroup().subscribe((res) => {
      this.numOfPatientsByAgreGroup = res;
    });

    this.service.getNumOfPatientsByGender().subscribe((res) => {
      this.numOfPatientsByGender = res;
    });
  }

  changeStatistics(input: string) {
    this.service.getNumOfPatientsByAgeGroupByDoctor(input).subscribe((res) => {
      this.numOfPatientsByAgreGroup = res;
    });
  }
}
