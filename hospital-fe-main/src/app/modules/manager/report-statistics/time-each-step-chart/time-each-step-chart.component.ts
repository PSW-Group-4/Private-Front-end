import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-each-step-chart',
  templateUrl: './time-each-step-chart.component.html',
  styleUrls: ['./time-each-step-chart.component.css']
})
export class TimeEachStepChartComponent implements OnInit {
  @Input() chartData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
