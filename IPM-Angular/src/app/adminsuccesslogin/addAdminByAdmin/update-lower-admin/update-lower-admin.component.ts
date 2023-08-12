import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { AdminserviceService } from 'src/app/services/adminlogin/adminservice.service';
import { Admin } from '../../../classfile/admin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-lower-admin',
  templateUrl: './update-lower-admin.component.html',
  styleUrls: ['./update-lower-admin.component.css']
})
export class UpdateLowerAdminComponent implements OnInit {

  public lad = new Admin();

  naid!: number
  naname!: string
  naemail!: string
  naphno!: string
  nagender!: string
  naage!: string
  naaddress!: string
  napassword!: string;

  constructor(private adminservice: AdminserviceService, private router: Router) { }

  ngOnInit(): void {



    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']);
    } else {
      this.naid = Number(localStorage.getItem("naid"));
      this.naname = String(localStorage.getItem("naname"));
      this.naemail = String(localStorage.getItem("naemail"));
      this.naphno = String(localStorage.getItem("naphno"));
      this.nagender = String(localStorage.getItem("nagender"));
      this.naage = String(localStorage.getItem("naage"));
      this.naaddress = String(localStorage.getItem("naaddress"));
      this.napassword = String(localStorage.getItem("napassword"));

      this.lad.adminname = this.naname;
      this.lad.adminemail = this.naemail;
      //this.naid;
      this.lad.adminage = this.naage;
      this.lad.admingender = this.nagender;
      this.lad.adminaddress = this.naaddress;
      this.lad.adminphno = this.naphno;
      this.lad.adminpassword = this.napassword
    }
  }
  updateLowerAdmin() {


    this.adminservice.adminUpdate(this.lad, this.naid).subscribe(
      respo => {

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: this.lad.adminname + "'s Data Updated!",
          showConfirmButton: false,
          timer: 3500
        })




      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops..',
          text: 'Something Went Wrong, Please Wait!'


        })

        console.warn(error);

      })


    setTimeout(() => {
      this.router.navigate(['viewadmins'])

    }, 4000)




  }


}
