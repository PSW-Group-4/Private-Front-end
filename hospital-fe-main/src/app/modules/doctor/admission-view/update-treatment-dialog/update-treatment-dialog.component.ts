import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdmissionUpdateTreatmentDto } from 'src/app/modules/hospital/model/admission-update-treatment-dto.model';
import { Admission } from 'src/app/modules/hospital/model/admission.model';
import { BloodConsumptionRecord } from 'src/app/modules/hospital/model/blood-consumption-record.model';
import { Medicine } from 'src/app/modules/hospital/model/medicine-model';
import { Patient } from 'src/app/modules/hospital/model/patient.model';
import { TreatmentDto } from 'src/app/modules/hospital/model/treatment-dto.model';
import { Treatment } from 'src/app/modules/hospital/model/treatment-model';
import { TreatmentRequestDto } from 'src/app/modules/hospital/model/treatment-request-dto.model';
import { DoctorAppointmentService } from '../../doctor-appointments/doctor-appointment.service';
import { BloodConsumptionRecordService } from '../../doctor-blood-consumption/doctor-blood-consumption.service';
import { BloodRequestService } from '../../doctor-blood-consumption/doctor-blood-request.service';

@Component({
  selector: 'app-update-treatment-dialog',
  templateUrl: './update-treatment-dialog.component.html',
  styleUrls: ['./update-treatment-dialog.component.css']
})
export class UpdateTreatmentDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdateTreatmentDialogComponent>,private doctorAppointmentService : DoctorAppointmentService,private bloodConsumptionRecordService: BloodConsumptionRecordService) { }

  createdTreatment : Treatment = new Treatment;
  admission : Admission = new Admission;
  treatment : Treatment = new Treatment;
  medicine : Medicine = new Medicine;
  selectedMedicine : Medicine = new Medicine;
  blood : BloodConsumptionRecord = new BloodConsumptionRecord;
  public medicines: Medicine[]= [];
  treatmentDto : TreatmentDto = new TreatmentDto;
  treatmentRequestDto : TreatmentRequestDto = new TreatmentRequestDto;
  admissionUpdateTreatmentDto : AdmissionUpdateTreatmentDto = new AdmissionUpdateTreatmentDto();
  amount : number = 0;
  reason : string = '';
  createdBlood: string = '';
  bloodRequest : BloodConsumptionRecord = new BloodConsumptionRecord;
  
  

  ngOnInit(): void {
    this.getAdmission();
    this.getMedicines();
    if(this.treatment.id === ''){
      console.log('on je null');
    }
    this.admissionUpdateTreatmentDto.id =  this.data.admissionId;
  }

  getAdmission():void{
    this.doctorAppointmentService.getAdmission(this.data.admissionId).subscribe(res => {
      this.admission = res;
      console.log(this.admission.Id);
      //this.admissionUpdateTreatmentDto.id = this.admission.Id;
      this.doctorAppointmentService.getTreatment(this.admission.treatments.id).subscribe(res => {
        this.treatment = res;        
        this.treatmentDto.id = this.treatment.id;       
        this.getMedicine();
        this.getBlood();
      })
    })
  }

  getMedicine(): void{
    this.doctorAppointmentService.getMedicine(this.treatment.medicineId).subscribe(res => {
      this.medicine = res;  
      
    })
  }

  getBlood(): void {
    this.doctorAppointmentService.getBlood(this.treatment.bloodConsumptionRecordId).subscribe(res =>{
      this.blood = res;
    })
  }

  getMedicines(): void{
    this.doctorAppointmentService.getMedicines().subscribe(res => {
      this.medicines = res;
    })
  }

  updateMedicine(): void{
    if(this.treatment.id === ''){
      this.createTreatment();
    } else {
      if(this.checkMedicine()){
        if(this.selectedMedicine.name === ''){
          alert('izaberite lek!');
        }
        else {
          this.doctorAppointmentService.updateTreatmentMedicine(this.selectedMedicine?.id, this.treatmentDto).subscribe(res => {      
        }) 
        }     
      }
      else {
        alert('izabrali ste isti lek');
      }
    }
    
  }

  checkMedicine(): boolean{
    if(this.selectedMedicine?.name === this.medicine.name){
      return false;
    }
    return true;
  }

  createTreatment(): void{
    this.treatmentRequestDto.medicineId = this.selectedMedicine.id;
    this.treatmentRequestDto.bloodConsumptionRecordId = null;
    this.treatmentRequestDto.dateChanged = Date.now;


    this.doctorAppointmentService.createTreatment(this.treatmentRequestDto).subscribe(res => {
      this.createdTreatment = res;      
      this.doctorAppointmentService.createTreatmentInAdmission(this.createdTreatment.id, this.data.admissionId).subscribe(res => {
        console.log('updejtovao');
      })
    });
    
  }

  createBloodObject():void{
    this.bloodRequest.reason = this.reason;
    this.bloodRequest.amount = this.amount;
    this.bloodRequest.dateTime = new Date().toDateString();
    this.bloodRequest.doctorId = 'a401926d-2cc7-43d3-af2e-1361212b2298';
    this.getBloodType();
  }

  getBloodType(): void{
    switch(this.admission.patient.bloodType){
      case 0: 
        this.bloodRequest.bloodType = 'A+'; 
        break;
      case 1: 
        this.bloodRequest.bloodType = 'A-';
        break;
      case 2: 
        this.bloodRequest.bloodType = 'B+';
        break;
      case 3: 
        this.bloodRequest.bloodType = 'B-';
        break;
      case 4: 
        this.bloodRequest.bloodType = 'O+';
        break;
      case 5: 
        this.bloodRequest.bloodType = 'O-';
        break;
      case 6: 
        this.bloodRequest.bloodType = 'AB+';
        break;
      case 7: 
        this.bloodRequest.bloodType = 'AB-';
        break;
        }
        this.bloodConsumptionRecordService.createBloodConsumptionRecord(this.bloodRequest).subscribe( res => {
          if(res == null){
            alert('Nema dovoljno krvi!');
          } else {
            this.createdBlood = res.id;          
          this.doctorAppointmentService.updateTreatmentBlood(this.createdBlood, this.treatmentDto).subscribe(res => {
            this.blood.amount += res.bloodConsumptionRecord.amount;
          })      
          }
          
        });

        
  }
  

  

 

}
