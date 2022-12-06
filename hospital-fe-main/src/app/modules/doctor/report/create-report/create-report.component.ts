import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { Medicine } from 'src/app/modules/hospital/model/medicine-model';
import { Prescription } from 'src/app/modules/hospital/model/prescription.model';
import { Report } from 'src/app/modules/hospital/model/report.model';
import { Symptom } from 'src/app/modules/hospital/model/symptom.module';
import { DoctorService } from 'src/app/modules/hospital/services/doctor-service';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private reportService: ReportService, private readonly doctorService: DoctorService) { }

  report: Report = new Report()

  loggedDoctor: Doctor = new Doctor()

  symptoms: Symptom[] = []
  selectedSymptom = ""
  symptomsDataSource: Symptom[] = []
  selectedSymptoms: Symptom[] = []

  reportText = ''

  medicine: Medicine[] = []
  selectedMedicine = ""
  medicineDataSource: Medicine[] = []
  selectedMedicines: Medicine[] = []

  prescriptions: Prescription[] = []
  newPrescription: Prescription = new Prescription()
  prescriptionsDataSource: Prescription[] = []

  displayedColumns: string[] = ['name', 'remove']
  displayedPrescriptionColumns: string[] = ['medicine', 'remove']

  ngOnInit(): void {
    this.doctorService.getLoggedDoctor().subscribe(res =>{
      this.loggedDoctor = res
    })
    this.reportService.getSymptoms().subscribe(res =>{
      this.symptoms = res
    })
    this.reportService.getMedicine().subscribe(res =>{
      this.medicine = res
    })
  }

  addSymptom(event: any): void {
    if (this.selectedSymptoms.find(sym => sym.id === event.value.id) === undefined){
      this.selectedSymptoms.push(event.value)
      this.symptomsDataSource = [...this.selectedSymptoms]
    }
  }

  removeSymptom(id: string): void {
    let index = this.selectedSymptoms.findIndex(sym => sym.id === id)
    this.selectedSymptoms.splice(index, 1)
    this.symptomsDataSource = [...this.selectedSymptoms]
  }

  addMedicine(event: any): void {
    if (this.selectedMedicines.find(med => med.id === event.value.id) === undefined){
      this.selectedMedicines.push(event.value)
      this.medicineDataSource = [...this.selectedMedicines]
    }
  }

  removeMedicine(id: string): void {
    let index = this.selectedMedicines.findIndex(med => med.id === id)
    this.selectedMedicines.splice(index, 1)
    this.medicineDataSource = [...this.selectedMedicines]
  }

  addPrescription(): void {
    if (this.selectedMedicines.length > 0){
      this.newPrescription.medicines = [...this.selectedMedicines]
      this.prescriptions.push(this.newPrescription)
      this.prescriptionsDataSource = [...this.prescriptions]

      this.selectedMedicines = []
      this.medicineDataSource = [...this.selectedMedicines]
      this.newPrescription = new Prescription()
    }
  }

  removePrescription(id: string): void {
    let index = this.prescriptions.findIndex(pre => pre.id === id)
    this.prescriptions.splice(index, 1)
    this.prescriptionsDataSource = [...this.prescriptions]
  }

  prescriptionMedicineToString(medicines: Medicine[]): string {
    let s = ''
    medicines.forEach(function(value){
      s += value.name + ' '
    })
    return s
  }

  createReport(): void {
    if (this.validateInput()){
      this.report.symptoms = [...this.selectedSymptoms]
      this.report.text = this.reportText
      this.report.prescriptions = [...this.prescriptions]
      this.report.dateTime = new Date().toUTCString()
      this.report.doctorId = this.loggedDoctor.id
      this.report.patientId = String(localStorage.getItem('selectedPatient'))
      console.log(this.report)
    }
    else{
      console.log('greška')
    }
  }

  validateInput(): boolean {
    if (this.selectedSymptoms.length === 0 || this.reportText === '' || this.prescriptions.length === 0){
      return false
    }
    return true
  }
}
