export class NumberSteps {
    step: any;
    stepCount: number = 0;
    averageNumber: number = 0;
  
    public constructor(obj?: any) {
      if (obj) {
        this.step = obj.step;
        this.stepCount = obj.stepCount;
        this.averageNumber = obj.averageNumber;
      }
    }
}