import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-choose-pdf-options-dialog',
  templateUrl: './choose-pdf-options-dialog.component.html',
  styleUrls: ['./choose-pdf-options-dialog.component.css']
})
export class ChoosePdfOptionsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private reportService: ReportService) { }
  public isCheckedInfo:boolean = false;
  public isCheckedDrugs:boolean = false;
  public isCheckedSymptoms:boolean = false;
  public isCheckedDiag:boolean = false;
  muk: String[] = ["pacijent","lek","dijagnoza"]
  set:String[] = []

  ngOnInit(): void {
  }

  generatePdf():void{
    this.getChecked();
    this.reportService.generatePdf(this.data.reportId,this.set).subscribe(data=>{
      
      let fileName = 'appointmentReport';
      let blob: Blob = data.body as Blob;
      let a = document.createElement('a');
      a.download=fileName;
      a.href = window.URL.createObjectURL(blob);
      window.open(a.href);
  })
  }
  getChecked():void{
    if(this.isCheckedInfo)
      this.set.push("pacijent")
    if(this.isCheckedDiag)
      this.set.push("dijagnoza")
    if(this.isCheckedDrugs)
      this.set.push("lek")
    if(this.isCheckedSymptoms)
      this.set.push("simptomi")
  }

}
