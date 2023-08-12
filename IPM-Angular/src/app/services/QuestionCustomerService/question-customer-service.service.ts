import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryCustomer } from 'src/app/classfile/QueryByCustomer/query-customer';
import { Observable } from 'rxjs';

import { QuestionsComponent } from '../../user-sucess-login/questions/questions.component';

@Injectable({
  providedIn: 'root'
})
export class QuestionCustomerServiceService {
 
  constructor(private http:HttpClient ) { }


  sendSms( questionByCustome:QueryCustomer ):Observable<QueryCustomer>{


    return    this.http.post<QueryCustomer>("http://localhost:8085/savequestion",questionByCustome);

  }
  getSmsEmail(email:string){
    return    this.http.get<QueryCustomer[]>("http://localhost:8085/findqustions/"+email+"");


  }
  getSmsAll(){

    return    


  }
  replyByAdmin(email:string ,query:QueryCustomer ){
    
    this.http.put<QueryCustomer>("http://localhost:8085/ans/"+email+"",query);

  }

}
