import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { ConsiliumService } from '../consilium.service';
import { ConsiliumRequest } from '../consiliumRequest.model';

@Component({
  selector: 'app-add-consilium-dialog',
  templateUrl: './add-consilium-dialog.component.html',
  styleUrls: ['./add-consilium-dialog.component.css']
})
export class AddConsiliumDialogComponent implements OnInit {
  startDate:string = '';
  endDate:string = '';
  reason:string = '';
  duration:string = '';
  greska:string = '';
  selectedValue:string = '';
  doctors:Doctor[] = []
  specialities:string[] = []
  doctorValues:string[] = []
  specialitiesValues:string[] = []
  consiliumRequest: ConsiliumRequest = new ConsiliumRequest

  constructor(private consiliumService:ConsiliumService) { }

  ngOnInit(): void {
    this.getAllDoctors();
    this.getAllSpecialities();
  }


  public getAllDoctors(): void {
    this.consiliumService.getDoctors().subscribe(res => {
      this.doctors = res;
    })
  }
  public getAllSpecialities(): void {
    this.consiliumService.getSpecialities().subscribe(res => {
      this.specialities = res;
    })
  }

  public onClearSelected(): void {
    this.doctorValues = []
    this.specialitiesValues = []
    this.greska = ''
  }

  public createConsilium(): void {
    if (this.selectedValue === ''){
      this.greska = 'Odaberite prioritet'
    }
    this.consiliumRequest.reason = this.reason
    this.consiliumRequest.dateStart = this.startDate
    this.consiliumRequest.dateEnd = this.endDate
    this.consiliumRequest.duration = this.duration

    if (this.selectedValue === 'doctor'){
      console.log(this.doctorValues)
      this.consiliumRequest.isDoctor = true
      this.consiliumRequest.specialities = []
      this.consiliumRequest.doctorsId = this.doctorValues
      this.consiliumService.sendConsiliumRequest(this.consiliumRequest).subscribe(res => {
        //this.specialities = res;
      })
    }
    else if(this.selectedValue === 'speciality'){
      console.log(this.specialitiesValues)
      this.consiliumRequest.isDoctor = false
      this.consiliumRequest.doctorsId = []
      this.consiliumRequest.specialities = this.specialitiesValues
      this.consiliumService.sendConsiliumRequest(this.consiliumRequest).subscribe(res => {
        //this.specialities = res;
      })
    }
  }
}
