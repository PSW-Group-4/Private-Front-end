import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Report } from 'src/app/modules/hospital/model/report.model';
import { ChoosePdfOptionsDialogComponent } from '../choose-pdf-options-dialog/choose-pdf-options-dialog.component';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-show-reports',
  templateUrl: './show-reports.component.html',
  styleUrls: ['./show-reports.component.css']
})
export class ShowReportsComponent implements OnInit {

  constructor(private reportService: ReportService, public dialog: MatDialog) { }
  public displayedColumns : String[] = []
  reports : Report[] = []
  searchText = ""
  public dataSource = new MatTableDataSource<Report>();

  ngOnInit(): void {
    this.displayedColumns = ["patientName","room","date","pdf"]
    this.getReports();
  }

  getReports():void{
    this.reportService.getReports().subscribe(res=>{
      this.reports = res;
      this.dataSource.data = this.reports
    })
  }

  openPdfChooser(id:string):void{
    const dialogRef = this.dialog.open(ChoosePdfOptionsDialogComponent, {
      data: {reportId: id},
      height: '400px',
      width: '400px',
      //data: {name: this.name, animal: this.animal},
    });    

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
      //this.showCurrentAppointment();
    });
  }

  search(){
    if(this.searchText.charAt(0) === "\"" && this.searchText.charAt(this.searchText.length - 1) === "\""){      
      this.reportService.advancedSearch(this.searchText.substring(1, this.searchText.length-1)).subscribe(res => {
        this.dataSource.data = res;
      })
    } else {
      this.basicSearch();
    }
  }

  basicSearch(){    
    if(this.searchText === ""){
      this.dataSource.data = this.reports;
      return;
    }
    this.reportService.basicSearch(this.searchText).subscribe(res => {
      this.dataSource.data = res;
    })
  }

  

}
