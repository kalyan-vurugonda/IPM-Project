
import { Component, OnInit } from '@angular/core';
import { Unknownquery } from '../classfile/unknownsms/unknownquery';
import { Router } from '@angular/router';
import { UnknownsmsService } from '../services/unknownsms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public u = new Unknownquery();
  constructor(private router: Router, private smsService: UnknownsmsService) { }

  ngOnInit(): void {
  }

  sendSms() {


    if (this.u.sms === '' || this.u.ucustomername === '' || this.u.usmsemail === '') {

      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: "Please Fill Up Every Field!",

      })

    } else {

      this.smsService.addUnkownsms(this.u).subscribe(dta => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thank You for Contacting Us!<br> We will Contact You Soon, ' + this.u.ucustomername,
          showConfirmButton: false,
          timer: 3500
        })

      }, error => {

        Swal.fire({
          icon: 'error',
          title: 'Oops..',
          text: 'Please Fill Up Every Field!',

        })

      })
    }

  }

}