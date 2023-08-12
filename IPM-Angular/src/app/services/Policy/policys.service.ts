import { Injectable } from '@angular/core';
import { Policye } from 'src/app/classfile/Policy/policye';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicysService {

  policy!:Policye;

  constructor(private http:HttpClient) { }

  getPolicies():Observable<Policye[]>{
    return this.http.get<Policye[]>("http://localhost:8085/getpolicys");
  }

  getPolicyById(policyId: number): Observable<Policye> {
    return this.http.get<Policye>("http://localhost:8085/getpolicy/" + policyId);
}

}
