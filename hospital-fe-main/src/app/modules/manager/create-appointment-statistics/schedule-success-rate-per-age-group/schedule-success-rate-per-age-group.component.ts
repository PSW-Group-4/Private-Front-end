import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-schedule-success-rate-per-age-group',
  templateUrl: './schedule-success-rate-per-age-group.component.html',
  styleUrls: ['./schedule-success-rate-per-age-group.component.css'],
})
export class ScheduleSuccessRatePerAgeGroupComponent implements OnInit {
  public chart: any;
  @Input() chartData: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.createChart();
    if (this.chartData) {
      this.createChart();
    }
  }

  createChart() {
    if (this.chartData != undefined) {
      this.chart.destroy();
    }

    let data1 = [' ', ' ', ' ', ' '];
    if (this.chartData != undefined) {
      data1 = [
        this.chartData['Child(0 - 16)'],
        this.chartData['Young adults(17 - 30)'],
        this.chartData['Middle-aged adults(31 - 50)'],
        this.chartData['Old Adults(51 - 999)'],
      ];
    }

    this.chart = new Chart('MyChartSuccRate', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Child(0 - 16)',
          'Young adults(17 - 30)',
          'Middle-aged adults(31 - 50)',
          'Old Adults(51 - end)',
        ],
        datasets: [
          {
            label: 'Success rate',
            data: data1,
            backgroundColor: 'rgb(87, 127, 219)',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          // 'legend' now within object 'plugins {}'
          legend: {
            labels: {
              color: 'black', // not 'fontColor:' anymore
              // fontSize: 18  // not 'fontSize:' anymore
              font: {
                size: 18, // 'size' now within object 'font {}'
              },
            },
          },
        },
        scales: {
          y: {
            // not 'yAxes: [{' anymore (not an array anymore)
            ticks: {
              color: 'black', // not 'fontColor:' anymore
              // fontSize: 18,
              font: {
                size: 18, // 'size' now within object 'font {}'
              },
            },
          },
          x: {
            // not 'xAxes: [{' anymore (not an array anymore)
            ticks: {
              color: 'black', // not 'fontColor:' anymore
              //fontSize: 14,
              font: {
                size: 14, // 'size' now within object 'font {}'
              },
            },
          },
        },
      },
    });
  }
}
