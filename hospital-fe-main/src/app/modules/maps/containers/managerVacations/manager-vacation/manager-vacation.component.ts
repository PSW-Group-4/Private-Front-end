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


  public acceptVacationRequest(id: string): void {
    this.doctorVacationService.getVacationByID(id).subscribe(res => {
      this.updatedVacation = res;
      //this.updatedVacation.reason = "TESTTEST";
      console.log(this.updatedVacation.Id);

      // this.doctorVacationService.updateVacation(this.updatedVacation).subscribe(res => {
      // });;

      alert("Zahtev za godisnji odmor sa id-jem: " + this.updatedVacation.Id + " je prihvacen");
    })
  }


  public denyVacationRequest(id: string): void {
    this.doctorVacationService.getVacationByID(id).subscribe(res => {
      this.updatedVacation = res;

      this.updatedVacation.vacationStatus = 2; //0 je na cekanju, 1 je prihvacen, sve ostalo je odbijen

      this.doctorVacationService.updateVacation(this.updatedVacation);

      alert("Zahtev za godisnji odmor za doktora sa id-jem: " + this.updatedVacation.doctorId + "je odbijen");
    })
  }


}



