import { StatisticsService } from './../services/statistics.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { NumberOfPatientsByGenderDto } from '../model/numOfPatientsByGenderDto.model';

@Component({
  selector: 'app-bar-chart-gender',
  templateUrl: './bar-chart-gender.component.html',
  styleUrls: ['./bar-chart-gender.component.css'],
})
export class BarChartGenderComponent implements OnInit {
  service: StatisticsService;
  @Input() chartData: any;
  private chartValues: number[] = [];
  public chart: any;

  constructor(service: StatisticsService) {
    this.service = service;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.createChart();
  }

  createChart() {
    if (this.chart !== undefined) {
      this.chart.destroy();
    }

    this.chartValues = [];
    for (let item of this.chartData) {
      this.chartValues.push(item.patientCount);
    }

    this.chart = new Chart('MyChart1', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: 'Num of Patients',
            data: this.chartValues,
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
