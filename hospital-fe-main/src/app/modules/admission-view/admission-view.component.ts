import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorAppointmentService } from '../doctor/doctor-appointments/doctor-appointment.service';
import { Admission } from '../hospital/model/admission.model';

@Component({
  selector: 'app-admission-view',
  templateUrl: './admission-view.component.html',
  styleUrls: ['./admission-view.component.css']
})
export class AdmissionViewComponent implements OnInit {

  constructor(private doctorAppointmentservice: DoctorAppointmentService) { }

  displayedColumns = ['id', 'patientName', 'room', 'date','reason', 'update', 'delete'];
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


}
