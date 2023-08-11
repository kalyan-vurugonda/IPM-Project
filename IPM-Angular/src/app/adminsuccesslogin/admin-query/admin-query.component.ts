import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryCustomer } from '../../classfile/QueryByCustomer/query-customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-query',
  templateUrl: './admin-query.component.html',
  styleUrls: ['./admin-query.component.css']
})
export class AdminQueryComponent implements OnInit {
  public allQueryData!: QueryCustomer[];
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {


    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })

    } else {

      this.httpClient.get<any>('http://localhost:8085/findQuestionsBystatus').subscribe(
        response => {

          this.allQueryData = response;
          console.log(this.allQueryData);

        })
    }




  }

  replyId!: number;
  replySms(id: number) {

    (localStorage.setItem("replyid", "" + id));


    this.router.navigate(['adminQuery/reply']);


  }

}
