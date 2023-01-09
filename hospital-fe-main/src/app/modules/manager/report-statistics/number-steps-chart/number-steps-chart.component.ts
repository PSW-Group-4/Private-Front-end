import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-steps-chart',
  templateUrl: './number-steps-chart.component.html',
  styleUrls: ['./number-steps-chart.component.css']
})
export class NumberStepsChartComponent implements OnInit {
  @Input() chartData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
