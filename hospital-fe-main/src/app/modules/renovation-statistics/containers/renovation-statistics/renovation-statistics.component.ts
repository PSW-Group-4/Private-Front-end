import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { AverageNumberOfTimesWentBackPerStep } from '../../models/average-number-back-per-step.model';
import { StatisticForTable } from '../../models/statistics-for-table.model';
import { RenovationStatisticsFacade } from '../../renovation-statistics.facade';

@Component({
  selector: 'app-renovation-statistics',
  templateUrl: './renovation-statistics.component.html',
  styleUrls: ['./renovation-statistics.component.css']
})
export class RenovationStatisticsComponent implements OnInit {

  finishedUnfinishedData: BehaviorSubject<number[]>;
  avgTimeSpentOnStep: BehaviorSubject<number[]>;
  avgNumberOfBacks: BehaviorSubject<number[]>;
  numberOfTimesLeftOff: BehaviorSubject<number[]>;
  avgTimeSpentOnStepTimeframe: BehaviorSubject<number[]>;

  thirdStepFormGroup!: FormGroup;


  displayedColumns = ['startTime', 'totalTime', 'timesGoneBack', 'avgTimeSpentOnChooseType', 'avgTimeSpentOnChooseOldRooms', 'avgTimeSpentOnCreateTimeframe', 'avgTimeSpentOnCreateNewRooms', 'avgTimeSpentOnSelectSpecificTime'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource : MatTableDataSource<StatisticForTable> = new MatTableDataSource();

  constructor(private facade: RenovationStatisticsFacade, private _formBuilder: FormBuilder) {
    this.finishedUnfinishedData = new BehaviorSubject([0,0])
    this.avgTimeSpentOnStep = new BehaviorSubject([0,0])
    this.avgNumberOfBacks = new BehaviorSubject([0,0])
    this.numberOfTimesLeftOff = new BehaviorSubject([0,0])
    this.avgTimeSpentOnStepTimeframe = new BehaviorSubject([0,0])
    this.dataSource = new MatTableDataSource<StatisticForTable>();
  }

  ngOnInit(): void {

    this.thirdStepFormGroup = this._formBuilder.group({
      startControl: ['', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.min(0),
        Validators.max(23),
      ]],
      endControl: ['', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.min(0),
        Validators.max(23),
      ]]
    });

    this.facade.getFinishedSessionStatisticsForTable$().subscribe({
      next: (v) => this.dataSource = new MatTableDataSource<StatisticForTable>(v)
    });
    this.facade.getFinishedAndUnfinishedSessionStatistic$().subscribe({
      next: (v) => this.finishedUnfinishedData.next([v.numberOfFinished, v.numberOfUnfinished])
    });

    this.facade.getAverageTimeSpentOnStepsInSession$().subscribe({
      next: (v) => this.avgTimeSpentOnStep.next([v.avgTimeSpentOnChooseType, v.avgTimeSpentOnChooseOldRooms, v.avgTimeSpentOnCreateTimeframe, v.avgTimeSpentOnSelectSpecificTime, v.avgTimeSpentOnCreateNewRooms])
    });

    this.facade.getAverageNumberOfTimesWentBackPerStep$().subscribe({
      next: (v) => this.avgNumberOfBacks.next([v.avgTimesWentBackToType, v.avgTimesWentBackToOldRooms, v.avgTimesWentBackToTimeframe, v.avgTimesWentBackToSpecificTime, v.avgTimesWentBackToNewRooms])
    });

    this.facade.getNumberOfSessionLeftOffOnEachStep$().subscribe({
      next: (v) => this.numberOfTimesLeftOff.next([v.numberOnType, v.numberOnOldRooms, v.numberOnTimeframe, v.numberOnSpecificTime, v.numberOnNewRooms])
    });

    this.thirdStepFormGroup.value.startControl = 9;
    this.thirdStepFormGroup.value.endControl = 17

    var start = new Date();
    start.setHours(this.thirdStepFormGroup.value.startControl);
    var end = new Date();
    end.setHours(this.thirdStepFormGroup.value.endControl);

    this.facade.getAverageTimeSpentOnStepsInSessionForTimeframe$(start, end).subscribe({
      next: (v) => this.avgTimeSpentOnStepTimeframe.next([v.avgTimeSpentOnChooseType, v.avgTimeSpentOnChooseOldRooms, v.avgTimeSpentOnCreateTimeframe, v.avgTimeSpentOnSelectSpecificTime, v.avgTimeSpentOnCreateNewRooms])
    });
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  search() {
    if(!this.thirdStepFormGroup.hasError('required')) {
      var start = new Date();
      start.setHours(this.thirdStepFormGroup.value.startControl);
      var end = new Date();
      end.setHours(this.thirdStepFormGroup.value.endControl);

      if(this.thirdStepFormGroup.value.startControl > this.thirdStepFormGroup.value.endControl) {
        alert("Enter valid range (start hour needs to be less than end)")
        return;
      }
      
      this.facade.getAverageTimeSpentOnStepsInSessionForTimeframe$(start, end).subscribe({
        next: (v) => this.avgTimeSpentOnStepTimeframe.next([v.avgTimeSpentOnChooseType, v.avgTimeSpentOnChooseOldRooms, v.avgTimeSpentOnCreateTimeframe, v.avgTimeSpentOnSelectSpecificTime, v.avgTimeSpentOnCreateNewRooms])
      });
    }
  }
    

}
