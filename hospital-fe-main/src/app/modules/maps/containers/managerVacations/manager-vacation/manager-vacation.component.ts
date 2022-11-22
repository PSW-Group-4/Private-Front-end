import { CommentComponent } from './comment/comment.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorVacationService } from 'src/app/modules/doctor-vacation/doctor-vacation.service';
import { Vacation } from 'src/app/modules/hospital/model/vacation.model';

@Component({
  selector: 'app-manager-vacation',
  templateUrl: './manager-vacation.component.html',
  styleUrls: ['./manager-vacation.component.css']
})
export class ManagerVacationComponent implements OnInit {

  public dataSource = new MatTableDataSource<Vacation>();
  public displayedColumns : string[] = ['doctorName', 'reason', 'urgent', 'dateStart', 'dateEnd', 'approve', 'reject'];
  public vacations: Vacation[] = [];
  public updatedVacation: Vacation = new Vacation;

  constructor(private doctorVacationService: DoctorVacationService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showCurrentVacatioRequests();
  }

  public showCurrentVacatioRequests(): void {
    this.doctorVacationService.getVacations().subscribe(res => {
      this.vacations = res;
      this.dataSource.data = this.vacations;
      console.log(this.vacations);
    })
  }


  public acceptVacationRequest(selectedVacation: Vacation): void {
    selectedVacation.vacationStatus = 1; //znaci potvrdjen
    selectedVacation.deniedRequestReason = '';

    this.doctorVacationService.updateVacation(selectedVacation).subscribe(res => {
      alert("Zahtev za godisnji odmor za doktora sa id-jem doktora " + selectedVacation.doctorId + " je uspesno prihvacen!");
    });
    
  }

  public denyVacationRequest(selectedVacation: Vacation): void {
    this.dialog.open(CommentComponent, {
      width:'50%',
      data: selectedVacation
    });
  }



}



