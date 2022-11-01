export class FeedbackManagerResponseDto {
    id: string = "";
    patientFullname: string = '';
    date: Date = new Date();
    text: string = '';
    status: number = 0;
    isDesiredPublic: boolean = false;

    public constructor(obj?: any) {
        if (obj) {
          this.id = obj.id;
          this.patientFullname = obj.patientFullname;
          this.date = obj.date;
          this.text = obj.text;
          this.status = obj.status;
          this.isDesiredPublic = obj.isDesiredPublic;

        }
    }
}
