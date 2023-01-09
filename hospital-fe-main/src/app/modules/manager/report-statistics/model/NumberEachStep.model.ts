export class NumberEachStep {
    step: any;
    stepCount: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.step = obj.step;
            this.stepCount = obj.stepCount;
        }
    }
}