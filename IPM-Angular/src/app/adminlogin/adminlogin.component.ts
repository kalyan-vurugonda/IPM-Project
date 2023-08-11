import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminserviceService } from '../services/adminlogin/adminservice.service';
import { Admin } from '../classfile/admin';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router, private aservice: AdminserviceService) { }
  admin = new Admin()
  ngOnInit(): void {

  }


  alogin() {
    this.aservice.loginAdmin(this.admin).subscribe(dta => {
      // alert("You have SucessFully Login "+this.admin.adminemail);

      this.admin.adminJoinDate = dta.adminJoinDate;
      this.admin.adminaddress = dta.adminaddress;
      this.admin.adminage = dta.adminage;
      this.admin.admingender = dta.admingender;
      this.admin.adminid = dta.adminid;
      this.admin.adminphno = dta.adminphno;
      this.admin.adminname = dta.adminname;




      console.warn(this.admin,);

      localStorage.setItem("adminemail", this.admin.adminemail);

      localStorage.setItem("adminpassword", this.admin.adminpassword);
      localStorage.setItem("adminname", this.admin.adminname);


      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Successfull  ',
        text: "" + dta.adminname + "",
        showConfirmButton: false,
        timer: 8000
      })

      this.router.navigate(['alog/adminsucesslogin'])

    }, error => {


      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Bad Credential!Check Your Email and Password',

      })

      // alert("Please Check Your Credencial....");
    })


  }
  logout() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Logout Successfull',

      showConfirmButton: false,
      timer: 8000
    })
    localStorage.clear();
    this.router.navigate([""])
  }




}
