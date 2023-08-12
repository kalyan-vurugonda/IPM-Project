import { Injectable } from '@angular/core';

import{HttpClientModule,HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { User } from '../../classfile/user';

@Injectable({
  providedIn: 'root'
})

export class UserLoginService {

  constructor( private http:HttpClient) { }

  loginUser(user:User):Observable<User>{
    
    console.log(user.cpassword,user.cemail);
   
    return   this.http.get<User>("http://localhost:8085/login/"+user.cemail+"/"+user.cpassword);
    
  }
  afterLoginData(user:User):Observable<User>{

    return this.http.get<User>("http://localhost:8085/showdata/"+user.cemail+"/"+user.cpassword);
  }
}
