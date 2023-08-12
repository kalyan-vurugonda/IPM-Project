import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplyPolicie } from '../../classfile/ApplyPolicies/apply-policie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyPoliciesServiceService {
 
  constructor(public HttpClient:HttpClient) { }

    appPolicy( cu:ApplyPolicie):Observable<Object>{


      return this.HttpClient.post("http://localhost:8085/applypolicy",cu);


    }
//Update Status by Admin.....
    updateApplicationStatus(id:number,appstatus:ApplyPolicie){

          return this.HttpClient.put("http://localhost:8085/updatestatus/"+id+"",appstatus)

    }

    //Delete Appliction !
    deleteApplictionByID(aid:number)
    {
        return this.HttpClient.delete("http://localhost:8085/deleteaplication/"+aid)
    }



    
}
