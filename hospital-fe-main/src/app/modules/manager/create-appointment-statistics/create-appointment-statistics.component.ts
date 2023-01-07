import { StatisticsService } from './../patient-statistics/services/statistics.service';
import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-create-appointment-statistics',
  templateUrl: './create-appointment-statistics.component.html',
  styleUrls: ['./create-appointment-statistics.component.css'],
})
export class CreateAppointmentStatisticsComponent implements OnInit {
  averageTimeSpentOnEachSelectionPerSession: any;
  averageClickCountPerSession: any;
  totalTimeSpentPerAgeGroup: any;
  totalStepCountPerAgeGroup: any;
  schedulingSuccessRatePerAgeGroup: any;
  chosenCounterForEachDoctor: any;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.statisticsService
      .getAverageTimeSpentOnEachSelectionPerSession()
      .subscribe((res1) => {
        this.averageTimeSpentOnEachSelectionPerSession = res1;
        console.log(this.averageTimeSpentOnEachSelectionPerSession);

        this.statisticsService
          .getAverageClickCountPerSession()
          .subscribe((res2) => {
            this.averageClickCountPerSession = res2;
            console.log(this.averageClickCountPerSession);

            this.statisticsService
              .getTotalTimeSpentPerAgeGroup()
              .subscribe((res3) => {
                this.totalTimeSpentPerAgeGroup = res3;
                console.log(this.totalTimeSpentPerAgeGroup);

                this.statisticsService
                  .getTotalStepCountPerAgeGroup()
                  .subscribe((res4) => {
                    this.totalStepCountPerAgeGroup = res4;
                    console.log(this.totalStepCountPerAgeGroup);

                    this.statisticsService
                      .getSchedulingSuccessRatePerAgeGroup()
                      .subscribe((res5) => {
                        this.schedulingSuccessRatePerAgeGroup = res5;
                        console.log(this.schedulingSuccessRatePerAgeGroup);

                        this.statisticsService
                          .getChosenCounterForEachDoctor()
                          .subscribe((res6) => {
                            this.chosenCounterForEachDoctor = res6;
                            console.log(this.chosenCounterForEachDoctor);
                          });
                      });
                  });
              });
          });
      });
  }

  getDate() {
    return Number(
      this.averageTimeSpentOnEachSelectionPerSession['Date'].toFixed(2)
    );
  }

  getSpeciality() {
    return Number(
      this.averageTimeSpentOnEachSelectionPerSession['Speciality'].toFixed(2)
    );
  }

  getDoctor() {
    return Number(
      this.averageTimeSpentOnEachSelectionPerSession['Doctor'].toFixed(2)
    );
  }

  getTime() {
    return Number(
      this.averageTimeSpentOnEachSelectionPerSession['Time'].toFixed(2)
    );
  }
}
