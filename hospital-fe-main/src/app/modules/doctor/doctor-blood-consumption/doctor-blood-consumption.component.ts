import { Component, OnInit } from '@angular/core';
import { BloodSupply } from '../../hospital/model/blood-supply.model';
import { BloodConsumptionRecordService } from './doctor-blood-consumption.service';

@Component({
  selector: 'app-doctor-blood-consumption',
  templateUrl: './doctor-blood-consumption.component.html',
  styleUrls: ['./doctor-blood-consumption.component.css']
})
export class DoctorBloodConsumptionComponent implements OnInit {

  constructor(private bloodConsumptionRecordService: BloodConsumptionRecordService) { }

  isDisplayingMoreBlood = false;
  bloodSupply: BloodSupply[] = []
  displayedColumns: string[] = ['type', 'amount']

  ngOnInit(): void {
    this.bloodConsumptionRecordService.getBloodSupply().subscribe(res => {
      console.log(res)
      this.bloodSupply = res
      console.log(this.bloodSupply[0].amount)
    })
  }

  displayBloodConsumptionRecord(): void{
    this.isDisplayingMoreBlood = false;
  }

  displayMoreBlood(): void{
    this.isDisplayingMoreBlood = true;
  }

  getBloodTypeString(bloodType: any): string {
    let str = ''
    switch(bloodType.bloodGroup){
      case 0:
        str += 'O'
        break
      case 1:
        str += 'A'
        break
      case 2:
        str += 'B'
        break
      case 3:
        str += 'AB'
        break
    }
    switch(bloodType.rhFactor){
      case 0:
        str += '+'
        break
      case 1:
        str += '-'
        break
    }
    return str
  }
}
