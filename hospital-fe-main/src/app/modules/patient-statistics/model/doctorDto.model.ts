export class DoctorDto {
  room = {};
  address = {};
  licenceNum: string = '';
  speciality: string = '';
  workingTimeStart: string = '';
  workingTimeEnd: string = '';
  roomId: string = '';
  id: string = '';
  name: string = '';
  surname: string = '';
  birthdate: string = '';
  gender: number = 0;
  addressId: string = '';
  jmbg: string = '';
  email: string = '';
  phoneNumber: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.room = obj.room;
      this.address = obj.address;
      this.licenceNum = obj.licenceNum;
      this.speciality = obj.speciality;
      this.workingTimeStart = obj.workingTimeStart;
      this.workingTimeEnd = obj.workingTimeEnd;
      this.roomId = obj.roomId;
      this.id = obj.id;
      this.name = obj.name;
      this.birthdate = obj.birthdate;
      this.gender = obj.gender;
      this.addressId = obj.addressId;
      this.jmbg = obj.jmbg;
      this.email = obj.email;
      this.phoneNumber = obj.phoneNumber;
    }
  }
}
