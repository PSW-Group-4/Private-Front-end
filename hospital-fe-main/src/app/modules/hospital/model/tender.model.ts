import {BloodProduct} from "./blood-product.model";
import { TenderApplication } from "./tender-application.model";

export class Tender {
  bloodProducts: BloodProduct[] = [];
  deadline: string | null | undefined;
  id: string = '';
  public constructor(obj?: any) {
    if (obj) {
      this.bloodProducts = obj.bloodProducts;
      this.deadline = obj.deadline;
      this.id = obj.id;
    }
  }
}
