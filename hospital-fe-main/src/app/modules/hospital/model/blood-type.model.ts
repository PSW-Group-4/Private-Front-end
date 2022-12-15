export class BloodType {
  bloodGroup: String = '';
  rhFactor: String = '';

  public constructor(obj?: any) {
    if (obj) {
      this.bloodGroup = obj.bloodGroup;
      this.rhFactor = obj.rhFactor;
    }
  }
}
