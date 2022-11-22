import { DoctorVacationService } from 'src/app/modules/doctor-vacation/doctor-vacation.service';
import { Vacation } from 'src/app/modules/hospital/model/vacation.model';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  
  constructor(private doctorService: DoctorVacationService, private dialogRef: MatDialogRef<CommentComponent>,
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
