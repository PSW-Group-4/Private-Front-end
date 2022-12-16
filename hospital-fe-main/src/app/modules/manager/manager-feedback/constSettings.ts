import { HttpHeaders } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

export class ConstSettings{

   static readonly apiHost: string = 'http://localhost:16177/';
  static readonly standardHeader: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  static readonly patchHeader: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json-patch+json' });
 }
