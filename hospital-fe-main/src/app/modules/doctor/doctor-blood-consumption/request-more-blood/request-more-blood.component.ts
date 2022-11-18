import { Component, OnInit } from '@angular/core';
import { BloodRequest } from 'src/app/modules/hospital/model/blood-request.model';
import { BloodRequestService } from '../doctor-blood-request.service';

@Component({
  selector: 'app-request-more-blood',
  templateUrl: './request-more-blood.component.html',
  styleUrls: ['./request-more-blood.component.css']
})
export class RequestMoreBloodComponent implements OnInit {

  constructor(private bloodRequestService: BloodRequestService) { }

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
    this.bloodRequest.bloodType = this.bloodTypes.indexOf(this.selectedBloodType);
    this.bloodRequest.bloodAmountInMilliliters = this.amount;
    this.bloodRequest.reasonsWhyBloodIsNeeded = this.reason;
    this.bloodRequest.dateTime = this.selectedDate.toDateString();
    this.bloodRequest.doctorId = '5c036fba-1118-4f4b-b153-90d75e60625e';
  }
}
