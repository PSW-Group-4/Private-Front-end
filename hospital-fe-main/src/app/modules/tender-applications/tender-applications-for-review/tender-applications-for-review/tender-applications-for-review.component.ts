import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TenderApplication } from 'src/app/modules/hospital/model/tender-application.model';
import { TenderApplicationService } from 'src/app/modules/hospital/services/tender-application.service';

@Component({
  selector: 'app-tender-applications-for-review',
  templateUrl: './tender-applications-for-review.component.html',
  styleUrls: ['./tender-applications-for-review.component.css']
})
export class TenderApplicationsForReviewComponent implements OnInit {
  public tenderApplications  = new MatTableDataSource<TenderApplication>();
  public applications :TenderApplication[] = []
  public displayedColumns = ['BloodBank.Name', 'PriceInRSD', 'Accept Offer'];
  constructor(@Inject(MAT_DIALOG_DATA) public app: TenderApplication[], public dialogRef: MatDialogRef<TenderApplicationsForReviewComponent>,public dialog: MatDialog, private readonly tenderApplicationService: TenderApplicationService) { 
    this.applications = app;
    this.tenderApplications.data = this.applications;
  }

  ngOnInit(): void {
    
  }
  acceptOffer(tenderApplication : TenderApplication):void{

  }
}
