import { Component, OnInit } from '@angular/core';
import { ReportStatisticsService } from './report-statistics.service';

@Component({
  selector: 'app-report-statistics',
  templateUrl: './report-statistics.component.html',
  styleUrls: ['./report-statistics.component.css']
})
export class ReportStatisticsComponent implements OnInit {
  reportTableData: any
  numberSteps: any
  numberEachStep: any
  timeSteps: any
  timeEachStep: any
  doctorTimeSteps: any
  constructor(private readonly reportStatistic:ReportStatisticsService) { }

  ngOnInit(): void {
    this.getAllReportStatistics()
  }

  private getAllReportStatistics():void{
    this.getReportTable();
    this.getNumberSteps();
    this.getTimeSteps();
    this.getNumberEachStep();
    this.getTimeEachStep();
    this.getDoctorTimeSteps()
  }

  getReportTable() {
    this.reportStatistic.getReportTable().subscribe((res) => {
      this.reportTableData = res;
      console.log(this.reportTableData)
    })
  }

  getNumberSteps() {
    this.reportStatistic.getNumberSteps().subscribe((res) => {
      this.numberSteps = res;
    })
  }

  getTimeSteps() {
    this.reportStatistic.getTimeSteps().subscribe((res) => {
      this.timeSteps = res;
    })
  }
  getNumberEachStep() {
    this.reportStatistic.getNumberEachStep().subscribe((res) => {
      this.numberEachStep = res;
    })
  }

  getTimeEachStep() {
    this.reportStatistic.getTimeEachStep().subscribe((res) => {
      this.timeEachStep = res;
    })
  }

  getDoctorTimeSteps() {
    this.reportStatistic.getDoctorTimeSteps().subscribe((res) => {
      this.doctorTimeSteps = res;
    })
  }
}
