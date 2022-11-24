import { Component, OnInit } from '@angular/core';
import { DoctorAppointmentService } from '../doctor-appointments/doctor-appointment.service';
import { Patient } from '../../hospital/model/patient.model';
import { Room } from '../../hospital/model/room.model';
import { RoomService } from '../../hospital/services/room.service';
import { PatientService } from '../../hospital/services/patient.service';
import { PatientRoomService } from '../../hospital/services/patient-room.service';
import { PatientRoom } from '../../hospital/model/patient-room.model';
import { Admission } from '../../hospital/model/admission.model';
import { AdmissionDto } from '../../hospital/model/admission-dto.model';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  public rooms: PatientRoom[]= [];
  public patients: Patient[]= [];
  router: any;

  constructor(private patientRoomService: PatientRoomService, private patientService: PatientService, private doctorAppointmentservice: DoctorAppointmentService) { }

  selectedRoom = new PatientRoom;
  selectedPatient = new Patient;
  
  //Id: string = "";
  
  reason: string = '';
  
  arrivalDate: string = '';

  admission = new AdmissionDto;


  ngOnInit(): void {
    this.patientRoomService.getRoomsWithFreeBeds().subscribe(res => {
      this.rooms = res;
    })

    this.patientService.getPatients().subscribe(res => {
      this.patients = res;
    })
  }

  validateInput(): boolean {
    if (this.selectedRoom === null || this.selectedPatient === null || this.reason === ''){
      return false;
    }
    else
      return true;
  }

  createAdmissionObject(){
      this.admission.arrivalDate = new Date(Date.now()).toDateString();
      this.admission.patientId = this.selectedPatient.id;
      this.admission.reason = this.reason;
      this.admission.roomId = this.selectedRoom.id.toString();
  }

  confirm(){
    if(this.validateInput()){
     this.createAdmissionObject();
      this.doctorAppointmentservice.createAdmission(this.admission).subscribe(res => alert("Pacijent uspesno primljen!"));    
      this.patientRoomService.captureBed(this.selectedRoom).subscribe(res => console.log('done')); 
      this.clearFields();

    } else {
      alert("Polja moraju biti popunjena!");
    }

    
  }
  clearFields(){
    this.reason = '';
    this.selectedPatient = new Patient();
    this.selectedRoom = new PatientRoom();
  }

}
