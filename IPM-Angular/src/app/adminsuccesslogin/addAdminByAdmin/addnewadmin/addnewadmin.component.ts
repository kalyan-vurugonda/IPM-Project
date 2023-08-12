import { Component, OnInit } from '@angular/core';
import { Admin } from '../../../classfile/admin';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminlogin/adminservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addnewadmin',
  templateUrl: './addnewadmin.component.html',
  styleUrls: ['./addnewadmin.component.css']
})

export class AddnewadminComponent implements OnInit {


  mainadminEmail!: any;
  public admin = new Admin()
  constructor(public router: Router, public adminService: AdminserviceService) { }

  ngOnInit(): void {

    this.admin.adminemail = "";
    this.admin.adminpassword = "";


    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })
    }

    this.mainadminEmail = localStorage.getItem('adminemail');


  }
  isPhoneNumberValid(phoneNumber: string): boolean {
    const phoneNumberPattern = /^\d{10}$/; // Exactly 10 digits
    return phoneNumberPattern.test(phoneNumber);
  }
  AdminReg() {
    this.admin.seniormangeremail = this.mainadminEmail;
    if (this.admin.adminname === undefined || this.admin.adminemail === undefined || this.admin.adminphno === undefined || this.admin.adminpassword === undefined || this.admin.adminaddress === undefined || this.admin.adminage === undefined) {

      console.warn(this.admin);

      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: "Please Fill Up Every Field!",

      })


    } else if (!this.admin.adminemail || !this.admin.adminemail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email.',
      });
    }

    else if (!this.isPhoneNumberValid(this.admin.adminphno)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid phone number.',
      });
    }


    else {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Add Admin',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.adminService.addAdmin(this.admin).subscribe(dts => {


            Swal.fire('Added!! Successfully', '', 'success')
            this.router.navigate(['newadmin']);

          }, error => {

            Swal.fire('Alredy Hav an Account', '', 'info')

          })


        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })

    }
  }

}
