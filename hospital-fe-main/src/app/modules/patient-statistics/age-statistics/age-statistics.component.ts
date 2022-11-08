import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-statistics',
  templateUrl: './age-statistics.component.html',
  styleUrls: ['./age-statistics.component.css'],
})
export class AgeStatisticsComponent implements OnInit {
  doctors: string[] = ['Dr1', 'Dr2', 'Dr3'];
  doctor = '';

  constructor() {}

  ngOnInit(): void {
    this.doctor = 'all';
  }

  changeStatistics(input: string) {
    this.doctor = input;
  }
}
