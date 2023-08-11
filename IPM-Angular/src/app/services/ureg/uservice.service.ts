import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../classfile/user';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserviceService {

  constructor(private http:HttpClient, private route:Router) { }

    registrionProcess(user:User):Observable<Object>{
      console.log(user)
    return this.http.post("http://localhost:8085/addcustomer",user);
    }
    UpdtaeUser(user:User,emial:string){

      return this.http.put("http://localhost:8085/updatecustomer/"+emial+"",user)
    }

    getAllCustomers(){
      return this.http.get<any>('http://localhost:8085/showcustomers');
    }

    deleteCustomer(customerId:number){
    const deletePoint = 'http://localhost:8085/deletecustomer/'+customerId;
      this.http.delete<number>(deletePoint).subscribe( response=> {
       
       
      },error=>{
        

           
            
      });
    }


}
