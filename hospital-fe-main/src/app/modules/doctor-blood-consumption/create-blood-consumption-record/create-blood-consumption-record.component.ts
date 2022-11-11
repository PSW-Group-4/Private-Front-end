import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-blood-consumption-record',
  templateUrl: './create-blood-consumption-record.component.html',
  styleUrls: ['./create-blood-consumption-record.component.css']
})
export class CreateBloodConsumptionRecordComponent implements OnInit {

  constructor() { }

  bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  selectedBloodType = '';

  ngOnInit(): void {

  }
}
