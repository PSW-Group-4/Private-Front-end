import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Renovation, TypeOfRenovation } from '../../models/renovation.model';

@Component({
  selector: 'app-room-renovation',
  templateUrl: './room-renovation.component.html',
  styleUrls: ['./room-renovation.component.css']
})
export class RoomRenovationComponent implements OnInit {
  
  public renovation : Renovation = new Renovation();
  public choices = TypeOfRenovation


  firstStepFormGroup: FormGroup;
  secondStepFormGroup: FormGroup;
  thirdStepFormGroup: FormGroup;
  forthStepFormGroup: FormGroup;
  fifthStepFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
      this.firstStepFormGroup = this._formBuilder.group({
        typeOfRenovation: ['', [Validators.required]]
      });
      this.secondStepFormGroup = this._formBuilder.group({
        typeOfRenovation: ['', [Validators.required]]
      });
      this.thirdStepFormGroup = this._formBuilder.group({
        typeOfRenovation: ['', [Validators.required]]
      });
      this.forthStepFormGroup = this._formBuilder.group({
        typeOfRenovation: ['', [Validators.required]]
      });
      this.fifthStepFormGroup = this._formBuilder.group({
        typeOfRenovation: ['', [Validators.required]]
      });
  }

  ngOnInit() {
    
  }

}
