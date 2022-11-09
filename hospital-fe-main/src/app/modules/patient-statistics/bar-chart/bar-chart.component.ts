import { StatisticsService } from './../services/statistics.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit, OnChanges {
  service: StatisticsService;
  public chart: any | undefined;
  @Input() chartData: any;
  private chartValues: string[] = [];
  private chartLabels: string[] = [];

  constructor(service: StatisticsService) {
    this.service = service;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //this.chart.destroy();
    this.createChart();
  }

  ngOnInit(): void {
    this.chartData = this.service.getNumOfPatientsByAgeGroup();
    this.createChart();
  }

  createChart() {
    if (this.chart !== undefined) {
      this.chart.destroy();
    }
    this.chartValues = [];
    this.chartLabels = [];
    for (let item of this.chartData) {
      this.chartValues.push(item.numb);
      this.chartLabels.push(item.ageGroup);
    }

    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.chartLabels,
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
