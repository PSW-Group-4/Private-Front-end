import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdmissionHistory } from 'src/app/modules/hospital/model/admission-history.model';
import { Patient } from 'src/app/modules/hospital/model/patient.model';
import { DoctorAppointmentService } from '../../doctor-appointments/doctor-appointment.service';
import { TreatmentDialogComponent } from './treatment-dialog/treatment-dialog.component';

@Component({
  selector: 'app-admission-history',
  templateUrl: './admission-history.component.html',
  styleUrls: ['./admission-history.component.css']
})
export class AdmissionHistoryComponent implements OnInit {

  constructor(private doctorAppointmentservice: DoctorAppointmentService,public dialog: MatDialog) { }

  displayedColumns = ['name', 'surname', 'arrivalDate', 'dischargeDate', 'medicalRecord'];
  list : AdmissionHistory[] = [];
  public dataSource = new MatTableDataSource<AdmissionHistory>();

  ngOnInit(): void {
    this.doctorAppointmentservice.getAdmissionHistories().subscribe(res => {
      this.list = res;
      this.dataSource.data = this.list;
    })
  }

  public openDischargeDialog(id:number): void {
    const dialogRef = this.dialog.open(TreatmentDialogComponent, {
      data: {admissionHistoryId: id},
      height: '550px',
      width: '400px',
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
      //this.showCurrentAppointment();
    });
  }
}
