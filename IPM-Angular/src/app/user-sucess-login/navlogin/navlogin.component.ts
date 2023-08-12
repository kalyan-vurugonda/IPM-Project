import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navlogin',
  templateUrl: './navlogin.component.html',
  styleUrls: ['./navlogin.component.css']
})
export class NavloginComponent implements OnInit {
  public cname!: any;
  public cemail!: any;
  constructor(public router: Router, private location: Location) {


  }

  ngOnInit(): void {

    this.cname = localStorage.getItem('cname');
    this.cemail = localStorage.getItem('cemail')

    if (this.cname == null) {
      this.router.navigate(['ulog'])
    }
    console.log(this.cname);

  }
  goBack() {
    this.location.back();
  }

  profile() {
    this.router.navigate(['profile'])
  }
  history() {
    this.router.navigate(['history'])
  }
  applypolicie() {
    this.router.navigate(['policies'])
  }
  queries() {
    this.router.navigate(['queries'])
  }

  password() {
    this.router.navigate(['password'])
  }



  policies() {
    this.router.navigate(['policies'])
  }
  dashboard() {
    this.router.navigate(['udashboard']);
  }
  logout() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Logout Successfull ',

      showConfirmButton: false,
      timer: 8000
    })
    localStorage.clear();
    this.router.navigate([""])
  }




}
