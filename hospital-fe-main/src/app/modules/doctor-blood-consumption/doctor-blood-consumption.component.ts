import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-blood-consumption',
  templateUrl: './doctor-blood-consumption.component.html',
  styleUrls: ['./doctor-blood-consumption.component.css']
})
export class DoctorBloodConsumptionComponent implements OnInit {

  constructor() { }

  isDisplayingMoreBlood = false;

  ngOnInit(): void {

  }

  displayBloodConsumptionRecord(): void{
    this.isDisplayingMoreBlood = false;
  }

  displayMoreBlood(): void{
    this.isDisplayingMoreBlood = true;
  }
}
