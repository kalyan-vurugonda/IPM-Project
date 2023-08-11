import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unknownquery } from '../classfile/unknownsms/unknownquery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnknownsmsService {

  constructor(private HttpClient:HttpClient) { }

  //Add Unknown Sms 

     addUnkownsms(unknown:Unknownquery):Observable<Unknownquery>{


         return   this.HttpClient.post<Unknownquery>("http://localhost:8085/addunknowsms",unknown)

     }
}
