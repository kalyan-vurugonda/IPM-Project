import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classfile/user';
import { UserviceService } from '../services/ureg/uservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ureg',
  templateUrl: './ureg.component.html',
  styleUrls: ['./ureg.component.css'],
})
export class UregComponent implements OnInit {


  user: User = new User();
  constructor(private reService: UserviceService, private route: Router) { }

  ngOnInit(): void {


    this.user.cemail = "";
    this.user.cpassword = "";

  }

  isPasswordValid(password: string): boolean {
    // Password validation logic
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    return passwordPattern.test(password);
  }
  isPhoneNumberValid(phoneNumber: string): boolean {
    const phoneNumberPattern = /^\d{10}$/; // Exactly 10 digits
    return phoneNumberPattern.test(phoneNumber);
  }

  UserReg() {


    if (this.user.caddress === undefined || this.user.cage === undefined || this.user.cemail === undefined || this.user.cgender === undefined || this.user.cname === undefined || this.user.cpassword === undefined || this.user.cpassword === "" || this.user.cphno === undefined) {

      console.warn(this.user);

      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: "Please Fill Up Every Field!",

      })


    } else if (!this.user.cemail || !this.user.cemail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'Please enter a valid email.',
      });
    }
    else if (!this.isPasswordValid(this.user.cpassword)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Password should contain minimun 8 characters with atleast one lower, one upper and one digit.',
      });
    }
    else if (!this.isPhoneNumberValid(this.user.cphno)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'Please enter a valid phone number.',
      });
    }

    else {

      this.reService.registrionProcess(this.user).subscribe((data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Thanks For Register ' + this.user.cname,
          showConfirmButton: false,
          timer: 2500
        })
        this.route.navigate(["/ulog"]);
      }), error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You Already Have an Account!',

        })
        this.route.navigate(["/ulog"]);
      });

    }
    //console.log("Hit it");

  }
}
