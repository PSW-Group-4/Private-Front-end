import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorAppointmentService } from '../doctor-appointments/doctor-appointment.service';
import { Admission } from '../../hospital/model/admission.model';
import { DischargeAdmissionDialogComponent } from './discharge-admission-dialog/discharge-admission-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTreatmentDialogComponent } from './update-treatment-dialog/update-treatment-dialog.component';

@Component({
  selector: 'app-admission-view',
  templateUrl: './admission-view.component.html',
  styleUrls: ['./admission-view.component.css']
})
export class AdmissionViewComponent implements OnInit {

  constructor(private doctorAppointmentservice: DoctorAppointmentService,public dialog: MatDialog) { }

  displayedColumns = ['patientName', 'room', 'date','reason', 'treatment' ,'delete'];
  list : Admission[] = [];
  public dataSource = new MatTableDataSource<Admission>();

  ngOnInit(): void {
    this.InitTable();
  }

  InitTable():void{
    this.doctorAppointmentservice.getAdmissions().subscribe(res => {
      this.list = res;
      this.dataSource.data = this.list;
    })
  }

  public openDischargeDialog(id:number): void {
    const dialogRef = this.dialog.open(DischargeAdmissionDialogComponent, {
      data: {admissionId: id},
      height: '500px',
      width: '400px',
      //data: {name: this.name, animal: this.animal},
    });    

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
      //this.showCurrentAppointment();
    });
  }

  public openTreatmentDialog(admId:number): void {
    const dialogRef = this.dialog.open(UpdateTreatmentDialogComponent, {
      data: {admissionId: admId},
      height: '570px',
      width: '400px',
    })
  }

}
