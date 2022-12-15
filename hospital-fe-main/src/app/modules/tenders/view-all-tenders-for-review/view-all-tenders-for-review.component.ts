import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TenderApplication } from '../../hospital/model/tender-application.model';
import { Tender } from '../../hospital/model/tender.model';
import { TenderForReview } from '../../hospital/model/tenders-for-review.model';
import { TenderApplicationService } from '../../hospital/services/tender-application.service';
import { TenderService } from '../../hospital/services/tender.service';
import { TenderApplicationsForReviewComponent } from '../../tender-applications/tender-applications-for-review/tender-applications-for-review/tender-applications-for-review.component';


@Component({
  selector: 'app-view-all-tenders-for-review',
  templateUrl: './view-all-tenders-for-review.component.html',
  styleUrls: ['./view-all-tenders-for-review.component.css']
})
export class ViewAllTendersForReviewComponent implements OnInit {
  public dataSource = new MatTableDataSource<TenderForReview>;
  public tenders: TenderForReview[] = [];
  public columnDefs : any[] = ['bloodType','amount']
  public tenderApplications : TenderApplication[] = [];
  public showTenders : number = 1;
  public displayedColumns = ['BloodBank.Name', 'PriceInRSD', 'Accept Offer'];
  constructor(private tenderService: TenderService, private tenderApplicationService: TenderApplicationService, private router: Router,private modalService: NgbModal, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tenderService.getForReview().subscribe(res => {
      this.tenders = res;
      this.dataSource.data = this.tenders;
      })
  }
      
  
  viewApplications(tender : TenderForReview): void {
    this.tenderApplicationService.GetByTender(tender.id).subscribe(res =>{
      this.tenderApplications = res;
      this.showTenders = 0;
    })
  }
  acceptOffer(tenderApplication : TenderApplication):void{
    this.tenderApplicationService.acceptOffer(tenderApplication).subscribe(res =>{
      alert("Tender application winner was successfully selected");
      this.showTenders = 1;
    })
  }
  cancel() : void{
    this.showTenders = 1;
  }
}
