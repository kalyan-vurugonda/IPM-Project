import { Component, OnInit } from '@angular/core';
import { Policye } from '../../../classfile/Policy/policye';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policys-view-by-admin',
  templateUrl: './policys-view-by-admin.component.html',
  styleUrls: ['./policys-view-by-admin.component.css']
})
export class PolicysViewByAdminComponent implements OnInit {

  public allPolicyData!: Policye[]
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })
    }


    this.httpClient.get<any>('http://localhost:8085/getpolicys').subscribe(
      response => {
        this.allPolicyData = response;
        console.log(this.allPolicyData);

      })

  }

}
