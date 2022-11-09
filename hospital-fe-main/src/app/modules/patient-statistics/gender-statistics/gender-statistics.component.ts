import { StatisticsService } from './../services/statistics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-statistics',
  templateUrl: './gender-statistics.component.html',
  styleUrls: ['./gender-statistics.component.css'],
})
export class GenderStatisticsComponent implements OnInit {
  service: StatisticsService;
  numOfPatientsByGender: any;

  constructor(service: StatisticsService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.numOfPatientsByGender = this.service.getNumOfPatientsByGender();
  }
}
