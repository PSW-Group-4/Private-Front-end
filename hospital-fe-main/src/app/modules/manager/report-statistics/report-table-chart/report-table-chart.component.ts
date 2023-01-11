import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-table-chart',
  templateUrl: './report-table-chart.component.html',
  styleUrls: ['./report-table-chart.component.css']
})
export class ReportTableChartComponent implements OnInit {
  @Input() chartData: any;
  averageSteps:number = 0
  averageTime:number = 0
  averageSymptom:number = 0
  averageReportLenght:number = 0
  averageMedicine:number = 0

  constructor() { }

  ngOnInit(): void {
    this.inputDataInTable()
  }

  ngOnChanges(): void {
    this.inputDataInTable();
  }

  inputDataInTable() {
    this.averageSteps = this.chartData['averageSteps']
    this.averageTime = this.chartData["averageTime"]
    this.averageSymptom = this.chartData["averageSymptom"]
    this.averageReportLenght = this.chartData["averageReportLenght"]
    this.averageMedicine = this.chartData["averageMedicine"]
  }

}
