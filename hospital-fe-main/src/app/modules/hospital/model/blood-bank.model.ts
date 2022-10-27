export class BloodBank {
    Name: String ='';
    ServerAddress: string = '';
    EmailAddress: string = '';
    Password: string = '1';
    ApiKey: string = '1';

    public constructor(obj?: any) {
        if (obj) {
            this.EmailAddress = obj.EmailAddress;
            this.Name = obj.Name;    
            this.ServerAddress = obj.ServerAddress;    
        }
    }
}