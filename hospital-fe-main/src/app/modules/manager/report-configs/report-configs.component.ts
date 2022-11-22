import { Component, OnInit } from '@angular/core';
import { ReportConfigsService } from './services/report.configs.service';
import { FormsModule } from '@angular/forms'; 
import { requestFrequency } from './model/requestFrequency.enum';
import { ReportConfigurationDto } from './model/reportConfigurationDto.model';
import { BloodBankService } from '../../hospital/services/blood-bank.service';
@Component({
  selector: 'app-report-configs',
  templateUrl: './report-configs.component.html',
  styleUrls: ['./report-configs.component.css']
})
export class ReportConfigsComponent implements OnInit {
  
  public newConfig : ReportConfigurationDto = new ReportConfigurationDto();
  public updateSuccess : boolean = false;
  public new : boolean = false;
  public configs: any[] = [];
  public banks: any[] = [];
  constructor( private reportConfigsService: ReportConfigsService,
              private bloodBankService: BloodBankService) {
   }

  ngOnInit(): void {
    this.reportConfigsService.getAllConfigs().subscribe(res=>{
      this.configs = res;
     
    })
    this.bloodBankService.getBloodBanks().subscribe(res=>{
      this.banks=res;
      console.log(this.banks);
    })
  }
  updateConfig(item: any){
    this.updateSuccess=false;
    item.requestFrequency = parseInt(item.requestFrequency.toString());
    item.activeStatus = this.convertString(item.activeStatus);
    this.reportConfigsService.updateReport(item).subscribe(res=>{
      if(res.id == item.id){
        this.updateSuccess=true;
      }
    })
  }
  flipNewFlag(){
    this.new = !this.new;
  }
  convertString(string :string){
    if(string == "true"){
      return true;
    }
    else{
      return false;
    }
  }
}
