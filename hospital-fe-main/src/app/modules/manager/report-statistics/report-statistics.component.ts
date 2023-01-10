import { Component, OnInit } from '@angular/core';
import { ReportStatisticsService } from './report-statistics.service';

@Component({
  selector: 'app-report-statistics',
  templateUrl: './report-statistics.component.html',
  styleUrls: ['./report-statistics.component.css']
})
export class ReportStatisticsComponent implements OnInit {
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
    this.getNumberSteps();
    this.getTimeSteps();
    this.getNumberEachStep();
    this.getTimeEachStep();
    this.getDoctorTimeSteps()
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
