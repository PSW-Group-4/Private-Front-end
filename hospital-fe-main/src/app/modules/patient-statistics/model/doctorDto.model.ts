export class DoctorDto {
  id: string = '';
  fullname: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.fullname = obj.fullname;
    }
  }
}
