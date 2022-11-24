import { StatisticsService } from './../services/statistics.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  registerables,
} from 'chart.js';

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
    this.createChart();
  }

  ngOnInit(): void {
    //this.createChart();
  }

  createChart() {
    if (this.chart !== undefined) {
      this.chart.destroy();
    }
    this.chartValues = [];
    this.chartLabels = [];
    for (let item of this.chartData) {
      this.chartValues.push(item.patientCount);
      this.chartLabels.push(item.ageGroup.gropuName);
    }

    Chart.register(BarController, CategoryScale, LinearScale, BarElement);
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
