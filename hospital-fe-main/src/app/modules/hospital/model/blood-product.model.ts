import {BloodType} from "./blood-type.model";

export class BloodProduct {
  bloodType: BloodType | undefined;
  amount: number = 0;

  public constructor(obj?: any) {
    if (obj) {
      this.bloodType = obj.bloodType;
      this.amount = obj.amount;
    }
  }
}
