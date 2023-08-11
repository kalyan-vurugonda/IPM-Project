import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})




export class AdmindashboardComponent implements OnInit {

  adminnName: any;

  countCustomerQuestions!: number;
  countcustomer!: number;
  countpolicie!: number;
  unknownsmscount!: number;
  countApprove!: number;
  countPending!: number;
  countrejected!: number;
  countapllication!: number;


  constructor(private httpClient: HttpClient, private router: Router) { }




  ngOnInit(): void {


    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })
    } else {

      this.adminnName = localStorage.getItem("adminname")




      this.httpClient.get<number>('http://localhost:8085/countNotReply').subscribe(
        response => {
          this.countCustomerQuestions = response;
          console.log(this.countCustomerQuestions);

        })
      this.httpClient.get<number>('http://localhost:8085/countcustomer').subscribe(
        response => {
          this.countcustomer = response;
          console.log(this.countcustomer);

        })
      this.httpClient.get<number>('http://localhost:8085/countpolicie').subscribe(
        response => {
          this.countpolicie = response;
          console.log(this.countpolicie);

        })
      this.httpClient.get<number>('http://localhost:8085/unknownsmscount').subscribe(
        response => {
          this.unknownsmscount = response;
          console.log(this.unknownsmscount);

        })
      this.httpClient.get<number>('http://localhost:8085/countapllication').subscribe(
        response => {
          this.countapllication = response;
          console.log(this.countapllication);

        })
      this.httpClient.get<number>('http://localhost:8085/countApprove').subscribe(
        response => {
          this.countApprove = response;
          console.log(this.countApprove);

        })
      this.httpClient.get<number>('http://localhost:8085/countrejected').subscribe(
        response => {
          this.countrejected = response;
          console.log(this.countrejected);

        })
      this.httpClient.get<number>('http://localhost:8085/countPending').subscribe(
        response => {
          this.countPending = response;
          console.log(this.countPending);

        })
    }

  }

}
