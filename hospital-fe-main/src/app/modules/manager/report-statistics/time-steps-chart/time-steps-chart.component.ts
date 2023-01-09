import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { ReportStatisticsService } from '../report-statistics.service';

@Component({
  selector: 'app-time-steps-chart',
  templateUrl: './time-steps-chart.component.html',
  styleUrls: ['./time-steps-chart.component.css']
})
export class TimeStepsChartComponent implements OnInit {
  @Input() chartData: any;
  private chartValues: number[] = [];
  public chart: any;
  constructor(private reportStatisticsService:ReportStatisticsService) { }

  ngOnInit(): void {
  }

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

    this.chart = new Chart('MyChart', {
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
