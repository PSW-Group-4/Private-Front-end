import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-or-edit-appointment-dialog',
  templateUrl: './add-or-edit-appointment-dialog.component.html',
  styleUrls: ['./add-or-edit-appointment-dialog.component.css']
})
export class AddOrEditAppointmentDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  test?:string;

  ngOnInit(): void {
    
    if(this.data.isAdd){
      this.test="ovo je add";
    }else{
      this.test="ovo je edit"
    }
  }

}
