import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  public chart: any;
  @Input() doctor: string = '';
  public testData: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.testData = ['1', '2', '3', '4', '5'];
    this.createChart();
  }

  test() {
    console.log(this.doctor);
    switch (this.doctor) {
      case 'all':
        this.testData = ['1', '2', '3', '4', '5'];
        console.log(this.testData);
        this.chart.destroy();
        this.createChart();
        break;
      case 'Dr1':
        this.testData = ['4', '4', '4', '4', '4'];
        console.log(this.testData);
        this.chart.destroy();
        this.createChart();
        break;
      case 'Dr2':
        this.testData = ['6', '6', '6', '6', '6'];
        console.log(this.testData);
        this.chart.destroy();
        this.createChart();
        break;
      case 'Dr3':
        this.testData = ['8', '8', '8', '8', '8'];
        console.log(this.testData);
        this.chart.destroy();
        this.createChart();
        break;
      default:
        this.testData = ['1', '2', '3', '4', '5'];
        console.log(this.testData);
        this.chart.destroy();
        this.createChart();
        break;
    }
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['0-12', '13-20', '21-40', '41-70', '71+'],
        datasets: [
          {
            label: 'Num of Patients',
            data: this.testData,
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
