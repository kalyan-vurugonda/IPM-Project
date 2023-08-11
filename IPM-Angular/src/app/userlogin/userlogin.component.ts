import { Component, OnInit } from '@angular/core';
import { User } from '../classfile/user';

import { RouterModule, Router } from '@angular/router';
import { UserLoginService } from '../services/loginservice/user-login.service';
import { ServicesIpmComponent } from '../services-ipm/services-ipm.component';
import { AppComponent } from '../app.component';
import { HttpStatusCode } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


  user: User = new User();
  public udata = {};

  constructor(private userservice: UserLoginService, private route: Router) { }

  ngOnInit(): void {

  }
  reg() {
    this.route.navigate(['ureg']);
  }

  x: any;

  userlogin() {

    this.userservice.loginUser(this.user).subscribe(dta => {
      this.udata = dta;


      this.user.cage = dta.cage;
      this.user.cid = dta.cid;
      this.user.caddress = dta.caddress;
      this.user.cgender = dta.cgender;

      this.user.cphno = dta.cphno;

      localStorage.setItem('cname', dta.cname);
      localStorage.setItem('cpassword', dta.cpassword);
      localStorage.setItem('cemail', dta.cemail);




      console.log(this.user);

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Successfull  ',
        text: "" + dta.cname + "",
        showConfirmButton: false,
        timer: 8000
      })

      this.route.navigate(['ulog/sucessLogin']);


    }, error => {


      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Bad Credential! Check Your Email and Password',
        footer: '<a href="ureg">Are You New User ? Click Here!</a>'
      })

      this.route.navigate(['/ulog']);
    });




  }






}


