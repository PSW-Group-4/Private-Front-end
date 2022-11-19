export class NumberOfPatientsByAgeGroupDto {
  ageGroup: any;
  patientCount: number = 0;

  public constructor(obj?: any) {
    if (obj) {
      this.ageGroup = obj.ageGroup;
      this.patientCount = obj.patientCount;
    }
  }
}
