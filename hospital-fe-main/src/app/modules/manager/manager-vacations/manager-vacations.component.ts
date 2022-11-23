import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorVacationService } from '../../doctor-vacation/doctor-vacation.service';
import { Vacation } from '../../hospital/model/vacation.model';
import { CommentComponent } from './comment/comment/comment.component';

@Component({
  selector: 'app-manager-vacations',
  templateUrl: './manager-vacations.component.html',
  styleUrls: ['./manager-vacations.component.css']
})
export class ManagerVacationsComponent implements OnInit {

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
      alert("Request for vacation with doctorId: " + selectedVacation.doctorId + " accepted!");
    });
    
  }

  public denyVacationRequest(selectedVacation: Vacation): void {
    this.dialog.open(CommentComponent, {
      width:'50%',
      data: selectedVacation
    });
  }

}
