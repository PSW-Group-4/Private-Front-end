import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { DoctorService } from 'src/app/modules/hospital/services/doctor-service';
import { BloodConsumptionRecord } from '../../../hospital/model/blood-consumption-record.model';
import { BloodConsumptionRecordService } from '../doctor-blood-consumption.service';

@Component({
  selector: 'app-create-blood-consumption-record',
  templateUrl: './create-blood-consumption-record.component.html',
  styleUrls: ['./create-blood-consumption-record.component.css']
})
export class CreateBloodConsumptionRecordComponent implements OnInit {

  constructor(private bloodConsumptionRecordService: BloodConsumptionRecordService, private readonly doctorService: DoctorService) { }

  loggedDoctor: Doctor = new Doctor()

  bloodConsumptionRecord: BloodConsumptionRecord = new BloodConsumptionRecord();
  bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  selectedBloodType = '';
  amount = 0;
  reason = '';
  statusText = '';
  statusColor = '';

  ngOnInit(): void {
    this.doctorService.getLoggedDoctor().subscribe(res =>{
      this.loggedDoctor = res
    })
  }

  createRecord() {
    if (this.validateInput()){
      this.createRecordObject();
      this.bloodConsumptionRecordService.createBloodConsumptionRecord(this.bloodConsumptionRecord).subscribe(res => {
        if (res !== null){
          this.statusColor = 'green';
          this.statusText = 'Uspešno ste dodali evidenciju o potrošnji krvi';
        }
        else{
          this.statusColor = 'red';
          this.statusText = 'Nema dovoljno krvi u bazi!';
        }
      })
    }
    else{
      this.statusColor = 'red';
      this.statusText = 'Polja ne mogu biti prazna!';
    }
  }

  validateInput(): boolean {
    if (this.selectedBloodType === '' || this.amount <= 0 || this.reason === ''){
      return false;
    }
    else
      return true;
  }

  createRecordObject() {
    this.bloodConsumptionRecord.amount = this.amount;
    this.bloodConsumptionRecord.bloodType = this.selectedBloodType;
    this.bloodConsumptionRecord.reason = this.reason;
    this.bloodConsumptionRecord.dateTime = new Date(Date.now()).toDateString();
    this.bloodConsumptionRecord.doctorId = this.loggedDoctor.id;
  }
}
