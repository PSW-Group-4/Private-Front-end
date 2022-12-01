import {BloodProduct} from "./blood-product.model";

export class Tender {
  bloodProducts: BloodProduct[] = [];
  deadline: string | null | undefined;


  public constructor(obj?: any) {
    if (obj) {
      this.bloodProducts = obj.bloodProducts;
      this.deadline = obj.deadline;
    }
  }
}
