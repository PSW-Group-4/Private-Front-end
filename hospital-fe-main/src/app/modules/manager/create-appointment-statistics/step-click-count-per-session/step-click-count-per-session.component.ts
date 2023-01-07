import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-step-click-count-per-session',
  templateUrl: './step-click-count-per-session.component.html',
  styleUrls: ['./step-click-count-per-session.component.css'],
})
export class StepClickCountPerSessionComponent implements OnInit {
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
        this.chartData['Date'],
        this.chartData['Speciality'],
        this.chartData['Doctor'],
        this.chartData['Time'],
      ];
    }

    this.chart = new Chart('MyChartStepClickCount', {
      type: 'bar',

      data: {
        labels: ['Date', 'Speciality', 'Doctor', 'Time'],
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
