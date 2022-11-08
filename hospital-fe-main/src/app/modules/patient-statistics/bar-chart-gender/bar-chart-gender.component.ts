import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart-gender',
  templateUrl: './bar-chart-gender.component.html',
  styleUrls: ['./bar-chart-gender.component.css'],
})
export class BarChartGenderComponent implements OnInit {
  public chart: any;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart1', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: 'Num of Patients',
            data: ['15', '16'],
            backgroundColor: 'rgb(87, 127, 219)',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
