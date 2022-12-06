import { Component, OnInit } from '@angular/core';
import { BloodRequest } from 'src/app/modules/hospital/model/blood-request.model';
import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { DoctorService } from 'src/app/modules/hospital/services/doctor-service';
import { BloodRequestService } from '../doctor-blood-request.service';

@Component({
  selector: 'app-request-more-blood',
  templateUrl: './request-more-blood.component.html',
  styleUrls: ['./request-more-blood.component.css']
})
export class RequestMoreBloodComponent implements OnInit {

  constructor(private bloodRequestService: BloodRequestService, private readonly doctorService: DoctorService) { }

  loggedDoctor: Doctor = new Doctor()

  bloodRequest = new BloodRequest();
  bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  selectedBloodType = '';
  amount = 0;
  reason = '';
  minDate = new Date();
  selectedDate = new Date();
  statusText = '';
  statusColor = '';

  ngOnInit(): void {
    this.doctorService.getLoggedDoctor().subscribe(res =>{
      this.loggedDoctor = res
    })
  }

  createRequest() {
    if (this.validateInput()){
      this.createRequestObject();
      this.bloodRequestService.createBloodRequest(this.bloodRequest).subscribe(res =>{
        this.statusColor = 'green';
        this.statusText = 'Uspešno ste kreirali zahtev za krv';
      });
    }
    else {
      this.statusColor = 'red';
      this.statusText = 'Polja ne mogu biti prazna!';
    }
  }

  validateInput(): boolean {
    if (this.selectedBloodType === '' || this.amount <= 0 || this.reason === '' || this.selectedDate < new Date()){
      return false;
    }
    else
      return true;
  }

  createRequestObject() {
    this.bloodRequest.bloodType = Math.floor(((this.bloodTypes.indexOf(this.selectedBloodType) / 2 ) + 1) % 4);
    this.bloodRequest.rhfactor = this.bloodTypes.indexOf(this.selectedBloodType) % 2;
    this.bloodRequest.bloodAmountInMilliliters = this.amount;
    this.bloodRequest.reasonsWhyBloodIsNeeded = this.reason;
    this.bloodRequest.dateTime = new Date(this.selectedDate).toISOString();
    this.bloodRequest.doctorId = this.loggedDoctor.id;
  }
}
