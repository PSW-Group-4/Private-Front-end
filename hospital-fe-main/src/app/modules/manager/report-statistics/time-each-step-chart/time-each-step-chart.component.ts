import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-time-each-step-chart',
  templateUrl: './time-each-step-chart.component.html',
  styleUrls: ['./time-each-step-chart.component.css']
})
export class TimeEachStepChartComponent implements OnInit {
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
        this.chartData['Symptom'],
        this.chartData['ReportText'],
        this.chartData['Medicine'],
        this.chartData['Review'],
      ];
    }

    this.chart = new Chart('MyChart4', {
      type: 'bar',

      data: {
        labels: ['Symptom', 'ReportText', 'Medicine', 'Review'],
        datasets: [
          {
            label: 'Click count',
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
