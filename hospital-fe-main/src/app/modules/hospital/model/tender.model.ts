import {BloodProduct} from "./blood-product.model";

export class Tender {
  bloodProducts: BloodProduct[] = [];
  deadline: string = "";


  public constructor(obj?: any) {
    if (obj) {
      this.bloodProducts = obj.bloodProducts;
      this.deadline = obj.deadline;
    }
  }
}
