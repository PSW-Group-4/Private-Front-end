import { Component, Inject, OnInit } from '@angular/core';
import { BloodRequest } from '../blood-request.model';
import { BloodRequestService } from '../manager-request-review/service/blood-request.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, _closeDialogVia } from '@angular/material/dialog';

@Component({
  selector: 'app-rejection-dialog',
  templateUrl: './rejection-dialog.component.html',
  styleUrls: ['./rejection-dialog.component.css']
})
export class RejectionDialogComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public bloodRequest: BloodRequest,private bloodRequestService : BloodRequestService) {
  
   }

  ngOnInit(): void {
  }
  rejectRequest() : void{
    this.bloodRequestService.update(this.bloodRequest).subscribe(res=>{
  })
  }
}
