import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-statistics',
  templateUrl: './report-statistics.component.html',
  styleUrls: ['./report-statistics.component.css']
})
export class ReportStatisticsComponent implements OnInit {
  numberSteps: any[] = []
  numberEachStep: any[] = []
  timeSteps: any[] = []
  timeEachStep: any[] = []
  doctorTimeSteps: any[] = []
  constructor() { }

  ngOnInit(): void {
    this.getAllReportStatistics()
  }

  private getAllReportStatistics():void{
    this.getAllReportStatistics();
    this.getAllReportStatistics();
    this.getAllReportStatistics();
    this.getAllReportStatistics();
    this.getAllReportStatistics()
  }

}
