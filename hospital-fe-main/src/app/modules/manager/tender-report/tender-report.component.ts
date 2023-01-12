import { Component, OnInit } from '@angular/core';
import { TenderReportServiceService } from './Service/tender-report-service.service';

@Component({
  selector: 'app-tender-report',
  templateUrl: './tender-report.component.html',
  styleUrls: ['./tender-report.component.css']
})
export class TenderReportComponent implements OnInit {
  selectedMonth: String = "";
  tempMonth : String = "";
  tempBloodType : String = "";
  selectedYear: String = "";
  result : String = "";
  resultBlood : number | null | undefined;
  resultBloodString : String =  "";
  selectedBloodType : String = "";
  months  : String[] = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
  years  : String[] = [ '2023', '2022', '2021', '2020', '2019', '2018', '2017']
  bloodTypes  : String[] = [ 'O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']
  constructor(private reportService: TenderReportServiceService) { }
  ngOnInit(): void {
  }

  getPrice(){
    for(let i=0;i<this.months.length ;i++){
      if(this.months[i] == this.selectedMonth)
      {
        this.tempMonth = (i+1).toString();
        break;
      }
    }
    this.reportService.getPrice(this.tempMonth,this.selectedYear).subscribe(res => { this.result = res + "$"; })
  }

  getAmountOfBlood(){
    if(this.selectedBloodType.includes("+")){
      this.tempBloodType = this.selectedBloodType.replace("+", " POSITIVE")
    }
    else{
      this.tempBloodType = this.selectedBloodType.replace("-", " NEGATIVE")
    }
    this.reportService.getLiters(this.tempBloodType).subscribe(res => { this.resultBlood = res; this.resultBloodString = this.resultBlood.toString() + "L" })
  }
}
