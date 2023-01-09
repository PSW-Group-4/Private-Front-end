import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-time-steps-chart',
  templateUrl: './doctor-time-steps-chart.component.html',
  styleUrls: ['./doctor-time-steps-chart.component.css']
})
export class DoctorTimeStepsChartComponent implements OnInit {
  @Input() chartData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
