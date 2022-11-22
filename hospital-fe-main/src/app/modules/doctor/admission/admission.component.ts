import { Component, OnInit } from '@angular/core';
import { DoctorAppointmentService } from '../doctor-appointments/doctor-appointment.service';
import { Patient } from '../../hospital/model/patient.model';
import { Room } from '../../hospital/model/room.model';
import { RoomService } from '../../hospital/services/room.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  public rooms: Room[]= [];
  public patients: Patient[]= [];

  constructor(private roomService: RoomService, private doctorAppointmentService: DoctorAppointmentService) { }

  selectedRoom = new Room;
  selectedPatient = new Patient;
  

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(res => {
      this.rooms = res;
    })

    this.doctorAppointmentService.getPatients().subscribe(res => {
      this.patients = res;
    })
  }

}
