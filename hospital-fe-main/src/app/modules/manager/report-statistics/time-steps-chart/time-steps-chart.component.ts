import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { ReportStatisticsService } from '../report-statistics.service';

@Component({
  selector: 'app-time-steps-chart',
  templateUrl: './time-steps-chart.component.html',
  styleUrls: ['./time-steps-chart.component.css']
})
export class TimeStepsChartComponent implements OnInit {

  constructor(private reportStatisticsService:ReportStatisticsService) { }
  public chart: any;
  @Input() chartData: any;
  ngOnInit(): void {
  }


  
}
