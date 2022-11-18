import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CancelAppointmentDialogComponent } from '../../doctor/doctor-appointments/cancel-appointment-dialog/cancel-appointment-dialog.component';
import { Vacation } from '../../hospital/model/vacation.model';
import { CancelVacationRequestDialogComponent } from '../cancel-vacation-request-dialog/cancel-vacation-request-dialog.component';
import { DoctorVacationService } from '../doctor-vacation.service';

@Component({
  selector: 'app-vacation-scheduler',
  templateUrl: './vacation-scheduler.component.html',
  styleUrls: ['./vacation-scheduler.component.css']
})
export class VacationSchedulerComponent implements OnInit {
  
  public dataSource = new MatTableDataSource<Vacation>();
  public displayedColumns : string[] = [];
  public vacations: Vacation[] = [];

  isUrgent: string = '';
  whatStatus: string = ''

  doctorId = '1412c639-c5e1-47a1-b29b-1fe935536612';
  constructor(private doctorVacationService: DoctorVacationService, public dialog: MatDialog) { }

  @Input() whatVacationIs:string | undefined

  ngOnInit(): void {
    this.changeDispledTable();
  }

  changeDispledTable() {
    if(this.whatVacationIs === 'now'){
      this.displayedColumns = ['doctorName', 'reason', 'urgent', 'dateStart', 'dateEnd', 'status', 'delete'];
      this.showCurrentVacatioRequests();
    }else if(this.whatVacationIs === "denied"){
      this.displayedColumns = ['doctorName', 'reason', 'urgent', 'dateStart', 'dateEnd', 'status', 'deniedReason'];
      this.showDeniedVacationRequests();
    }else if(this.whatVacationIs === 'past'){
      this.displayedColumns = ['doctorName', 'reason', 'urgent', 'dateStart', 'dateEnd', 'status'];
      this.showOldVacationRequests();
    }
  }

  public showCurrentVacatioRequests(): void {
    this.doctorVacationService.getVacations().subscribe(res => {
      this.vacations = res;
      this.dataSource.data = this.vacations;
    })
  }

  public showDeniedVacationRequests(): void {
    this.doctorVacationService.getDoctorsDeniedVacationRequests(this.doctorId).subscribe(res => {
      this.vacations = res;
      this.dataSource.data = this.vacations;
    })
  }

  public showOldVacationRequests(): void {
    this.doctorVacationService.getDoctorsPastVacationRequests(this.doctorId).subscribe(res => {
      this.vacations = res;
      this.dataSource.data = this.vacations;
    })
  }

  openDeleteDialog(id:number): void {
    const dialogRef = this.dialog.open(CancelVacationRequestDialogComponent, {
      data: {vacationId: id},
      height: '200px',
      width: '400px',
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
      this.showCurrentVacatioRequests();
    });
  }
}
