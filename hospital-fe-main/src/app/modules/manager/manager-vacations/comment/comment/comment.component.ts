import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorVacationService } from 'src/app/modules/doctor-vacation/doctor-vacation.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private doctorService: DoctorVacationService,
    @Inject(MAT_DIALOG_DATA) public data : any) { //u data imamo vrednosti kliknutog elementa

     }

  ngOnInit(): void {
  }

  public sendComment() : void{
    this.data.vacationStatus = 2;
    this.doctorService.updateVacation(this.data).subscribe(res => {
      alert("Uspesno ste poslali odbijenicu!");
      this.doctorService.getVacations();
    })
  }

}
