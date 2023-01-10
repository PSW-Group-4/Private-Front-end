import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { ReportStatisticsService } from '../report-statistics.service';

@Component({
  selector: 'app-time-steps-chart',
  templateUrl: './time-steps-chart.component.html',
  styleUrls: ['./time-steps-chart.component.css']
})
export class TimeStepsChartComponent implements OnInit {
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

    this.chart = new Chart('MyChart2', {
      type: 'bar',

      data: {
        labels: ['Small', 'SmallNormal', 'BigNormal', 'Big'],
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
