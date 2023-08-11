import { Component, OnInit } from '@angular/core';
import { ApplyPolicie } from '../../../classfile/ApplyPolicies/apply-policie';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waitingp-policy-holder',
  templateUrl: './waitingp-policy-holder.component.html',
  styleUrls: ['./waitingp-policy-holder.component.css']
})
export class WaitingpPolicyHolderComponent implements OnInit {





  allApplyData!: ApplyPolicie[]
  
  constructor(
    private httpClient : HttpClient, private router:Router
  ) { }

  
  ngOnInit(): void {


    if(localStorage.getItem('adminemail')===undefined || localStorage.getItem('adminemail')===null ){




      this.router.navigate(['alog']).then(()=>{

        window.location.reload();
      })
    }
   
    this.httpClient.get<any>('http://localhost:8085/getallaplicationofpolicy').subscribe(
      response=> {
        this.allApplyData=response;
        console.log(this.allApplyData);
        
      })
    }

}
