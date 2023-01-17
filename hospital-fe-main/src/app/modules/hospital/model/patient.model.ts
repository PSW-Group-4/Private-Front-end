import { BloodType } from "./blood-type.model";

export class Patient{
    id: string = '';
    numLicenceNumber: string = '';
    speciality: string = '';
    workingTimeStart: string = '';
    workingTimeEnd: string = '';
    name: string = '';
    surname: string = '';
    birthdate: string = '';
    gender: number = 0;
    addressId: string = '';
    jmbg: string = '';
    email: string = '';
    phoneNumber: string = '';
    bloodType: BloodType = new BloodType();

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.numLicenceNumber = obj.numLicenceNumber;
            this.speciality = obj.speciality;
            this.workingTimeStart = obj.workingTimeStart;
            this.workingTimeEnd = obj.workingTimeEnd;
            this.name = obj.name;
            this.surname = obj.surname;
            this.birthdate = obj.birthdate;
            this.gender = obj.gender;
            this.addressId = obj.addressId;
            this.jmbg = obj.jmbg;
            this.email = obj.email;
            this.phoneNumber = obj.phoneNumber;     
            this.bloodType = obj.bloodType;
        }

    }
}