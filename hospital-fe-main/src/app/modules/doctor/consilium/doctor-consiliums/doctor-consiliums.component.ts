import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { AddConsiliumDialogComponent } from '../add-consilium-dialog/add-consilium-dialog.component';
import { Consilium } from '../consilium.model';
import { ConsiliumService } from '../consilium.service';
import { ConsiliumDoctorListDialogComponent } from './consilium-doctor-list-dialog/consilium-doctor-list-dialog.component';

@Component({
  selector: 'app-doctor-consiliums',
  templateUrl: './doctor-consiliums.component.html',
  styleUrls: ['./doctor-consiliums.component.css']
})
export class DoctorConsiliumsComponent implements OnInit {

  constructor(public dialog: MatDialog, private consiliumService : ConsiliumService) { }
  public displayedColumns : string[] = [];
  logged : Doctor = new Doctor;
  doctorConsiliums: Consilium[] = [];
  public dataSource = new MatTableDataSource<Consilium>();

  ngOnInit(): void {
    this.displayedColumns = ['theme', 'room', 'date', 'start','end','list'];
    this.getLogged();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddConsiliumDialogComponent, {
      height: '600px',
      width: '800px',
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
      // osvjezi Waiting_for_approval requeste
      //this.doctorVacationService.GetDoctorVacationsFromSpecificStatus(0,this.doctorId).subscribe(res =>{})
      this.getConsiliums();
      
    });
  }

  openDoctorListDialog(id: string): void{
    const dialogRef = this.dialog.open(ConsiliumDoctorListDialogComponent, {
      data: {consiliumId:id},
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getLogged(): void{
    this.consiliumService.getLoggedDoctor().subscribe(res=>{
      this.logged = res;
      this.getConsiliums();
    })
  }

  getConsiliums(): void{
    this.consiliumService.getDoctorConsiliums(this.logged.id).subscribe(res=>{
      this.doctorConsiliums = res
      this.dataSource.data = this.doctorConsiliums
    })
  }
}
