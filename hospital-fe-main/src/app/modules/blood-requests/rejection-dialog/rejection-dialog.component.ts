import { Component, Inject, OnInit } from '@angular/core';
import { BloodRequest } from '../blood-request.model';
import { BloodRequestService } from '../manager-request-review/service/blood-request.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, _closeDialogVia } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rejection-dialog',
  templateUrl: './rejection-dialog.component.html',
  styleUrls: ['./rejection-dialog.component.css']
})
export class RejectionDialogComponent implements OnInit {
  input: FormControl = new FormControl('');
  constructor( public dialogRef: MatDialogRef<RejectionDialogComponent>  ) {
  
   }

  ngOnInit(): void {
  }
  rejectRequest() : void{
    this.dialogRef.close(this.input.value)
  }
}
