import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chosen-doctor-count-per-doctor',
  templateUrl: './chosen-doctor-count-per-doctor.component.html',
  styleUrls: ['./chosen-doctor-count-per-doctor.component.css'],
})
export class ChosenDoctorCountPerDoctorComponent implements OnInit {
  public chart: any;
  @Input() chartData: any;
  chartLabels: any;
  chartValues: any;

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

    let data1 = [];
    let label1 = [];

    if (this.chartData != undefined) {
      for (let key of Object.keys(this.chartData)) {
        label1.push(key);
      }

      for (let value of Object.values(this.chartData)) {
        data1.push(value);
      }
    }

    this.chart = new Chart('MyChartChosenDoctor', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: label1,
        datasets: [
          {
            label: 'Chosen doctor count',
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
