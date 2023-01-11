import { Component, OnInit, ViewChild } from '@angular/core';
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
  displayedColumns = ['startTime', 'totalTime', 'timesGoneBack', 'avgTimeSpentOnChooseType', 'avgTimeSpentOnChooseOldRooms', 'avgTimeSpentOnCreateTimeframe', 'avgTimeSpentOnCreateNewRooms', 'avgTimeSpentOnSelectSpecificTime'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource : MatTableDataSource<StatisticForTable> = new MatTableDataSource();

  constructor(private facade: RenovationStatisticsFacade) {
    this.finishedUnfinishedData = new BehaviorSubject([0,0])
    this.dataSource = new MatTableDataSource<StatisticForTable>();
  }

  ngOnInit(): void {
    this.facade.getFinishedSessionStatisticsForTable$().subscribe({
      next: (v) => this.dataSource = new MatTableDataSource<StatisticForTable>(v)
    });
    this.facade.getFinishedAndUnfinishedSessionStatistic$().subscribe({
      next: (v) => this.finishedUnfinishedData.next([v.numberOfFinished, v.numberOfUnfinished])
    });
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
