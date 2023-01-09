import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-each-step-chart',
  templateUrl: './number-each-step-chart.component.html',
  styleUrls: ['./number-each-step-chart.component.css']
})
export class NumberEachStepChartComponent implements OnInit {
  @Input() chartData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
