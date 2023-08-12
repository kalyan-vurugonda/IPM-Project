import { Injectable, ɵɵngDeclareClassMetadata } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../../classfile/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// admin:Admin;
export class AdminserviceService {

  constructor( private http:HttpClient) { }

  loginAdmin(admin:Admin):Observable<Admin>{
    
    console.log(admin.adminpassword,admin.adminemail);
   
    //adminshowdata//
    return   this.http.get<Admin>("http://localhost:8085/adminshowdata/"+admin.adminemail+"/"+admin.adminpassword);
    
  }
  afterLoginData(admin:Admin):Observable<Admin>{

    return this.http.get<Admin>("http://localhost:8085/showdata/"+admin.adminemail+"/"+admin.adminpassword);
  }

  //Add admin-------
  addAdmin(admin:Admin){

    return this.http.post<Admin>("http://localhost:8085/addadmin",admin);
  }
  //Update Admin

  adminUpdate(admin:Admin,id:number):Observable<Admin>{

    return this.http.put<Admin>("http://localhost:8085/adminupdate/"+id,admin);
  }

  //show Adminn By Email id...

  showAdminByEamil(email:any):Observable<Admin[]>{
    return this.http.get<Admin[]>("http://localhost:8085/lowerAdmin/"+email)

  }

  deleteData(id:number):Observable<any>{


    return this.http.delete<any>("http://localhost:8085/deleteadmin/"+id)


  }
}
//Get Alll Admin-------
//Delete Data---- /deleteadmin/{id
