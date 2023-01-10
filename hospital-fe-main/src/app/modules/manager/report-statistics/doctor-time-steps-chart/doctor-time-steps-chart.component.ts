import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doctor-time-steps-chart',
  templateUrl: './doctor-time-steps-chart.component.html',
  styleUrls: ['./doctor-time-steps-chart.component.css']
})
export class DoctorTimeStepsChartComponent implements OnInit {
  public chart: any;
  @Input() chartData: any;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    console.log(this.chartData)
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
        this.chartData['Small'],
        this.chartData['SmallNormal'],
        this.chartData['BigNormal'],
        this.chartData['Big'],
      ];
    }

    this.chart = new Chart('MyChart5', {
      type: 'bar',

      data: {
        labels: ['<<25', '25 - 40', '40 - 60', '60>>'],
        datasets: [
          {
            label: 'Average time',
            data: data1,
            backgroundColor: 'rgb(175, 255, 203)',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          // 'legend' now within object 'plugins {}'
          legend: {
            labels: {
              color: 'white', // not 'fontColor:' anymore
              // fontSize: 18  // not 'fontSize:' anymore
              font: {
                size: 21, // 'size' now within object 'font {}'
              },
            },
          },
        },
        scales: {
          y: {
            // not 'yAxes: [{' anymore (not an array anymore)
            ticks: {
              color: 'white', // not 'fontColor:' anymore
              // fontSize: 18,
              font: {
                size: 24, // 'size' now within object 'font {}'
              },
            },
          },
          x: {
            // not 'xAxes: [{' anymore (not an array anymore)
            ticks: {
              color: 'white', // not 'fontColor:' anymore
              //fontSize: 14,
              font: {
                size: 28, // 'size' now within object 'font {}'
              },
            },
          },
        },
      },
    });
  }

}
