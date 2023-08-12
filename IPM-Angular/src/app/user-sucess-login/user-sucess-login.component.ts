import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sucess-login',
  templateUrl: './user-sucess-login.component.html',
  styleUrls: ['./user-sucess-login.component.css']
})
export class UserSucessLoginComponent implements OnInit {


  public cname!: any;
  public cemail!: any;

  constructor() { }

  ngOnInit(): void {
    this.cname = localStorage.getItem('cname');
    this.cemail = localStorage.getItem('cemail')

  }

}
