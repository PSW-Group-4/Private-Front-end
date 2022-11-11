export class NumberOfPatientsByGenderDto {
  gender: number = -1;
  patientCount: number = -1;

  public constructor(obj?: any) {
    if (obj) {
      this.gender = obj.gender;
      this.patientCount = obj.patientCount;
    }
  }
}
