import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Appointment } from '../../../hospital/model/appointment.model';
import { AddOrEditAppointmentDialogComponent } from '../add-or-edit-appointment-dialog/add-or-edit-appointment-dialog.component';
import { CancelAppointmentDialogComponent } from '../cancel-appointment-dialog/cancel-appointment-dialog.component';
import { DoctorAppointmentService } from '../doctor-appointment.service';

@Component({
  selector: 'app-doctor-scheduler',
  templateUrl: './doctor-scheduler.component.html',
  styleUrls: ['./doctor-scheduler.component.css']
})
export class DoctorSchedulerComponent implements OnInit {

  public dataSource = new MatTableDataSource<Appointment>();
  public displayedColumns : string[] = [];
  public appointments: Appointment[] = [];
  doctorId = 'e6fbebce-dd68-11e4-9e38-c66b98cc8197';
  
  constructor(private doctorAppointmentService: DoctorAppointmentService, public dialog: MatDialog, private router: Router) { }

  @Input() isCurrentAppointment:boolean | undefined
  
  ngOnInit(): void {
    this.changeDispledTable();
  }

  changeDispledTable() {
    if(this.isCurrentAppointment){
      this.displayedColumns = ['doctorName', 'patientName', 'room', 'date','time', 'update', 'delete'];
      this.showCurrentAppointment();
    }else{
      this.displayedColumns = ['doctorName', 'patientName', 'room', 'date', 'time', 'report'];
      this.showOldAppointment();
    }
  }

  public showCurrentAppointment(): void {
    this.doctorAppointmentService.getDoctorsCurrentAppointments(this.doctorId).subscribe(res => {
      this.appointments = res;
      this.dataSource.data = this.appointments;
    })
  }

  public showOldAppointment(): void {
    this.doctorAppointmentService.getDoctorsOldAppointments(this.doctorId).subscribe(res => {
      this.appointments = res;
      this.dataSource.data = this.appointments;
    })
  }

  createReport(id: string): void {
    localStorage.setItem('selectedPatient', id)
    this.router.navigateByUrl('/doctor/report')
  }

  openEditDialog(id:number): void {
    const dialogRef = this.dialog.open(AddOrEditAppointmentDialogComponent, {
      data: {isAdd: false,
            appointmentId: id},
      height: '400px',
      width: '600px',
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.showCurrentAppointment();
    });
  }

  openDeleteDialog(id:number): void {
    const dialogRef = this.dialog.open(CancelAppointmentDialogComponent, {
      data: {appointmentId: id},
      height: '200px',
      width: '400px',
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
      this.showCurrentAppointment();
    });
  }
}
