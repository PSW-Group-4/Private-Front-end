import { Component, getModuleFactory, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { ConsiliumService } from '../../consilium.service';

@Component({
  selector: 'app-consilium-doctor-list-dialog',
  templateUrl: './consilium-doctor-list-dialog.component.html',
  styleUrls: ['./consilium-doctor-list-dialog.component.css']
})
export class ConsiliumDoctorListDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private consiliumService : ConsiliumService,public dialogRef: MatDialogRef<ConsiliumDoctorListDialogComponent>) { }
  
  public displayedColumns: string[] = [];
  public dataSource = new MatTableDataSource<Doctor>();
  doctors : Doctor[] = []

  ngOnInit(): void {
    this.displayedColumns = ['name', 'surname', 'speciality'];
    this.getDoctors();
  }

  getDoctors() : void{
    this.consiliumService.getConsiliumById(this.data.consiliumId).subscribe(res=>{
      this.doctors = res.doctors;
      this.dataSource.data = this.doctors;
    })
  }

}
