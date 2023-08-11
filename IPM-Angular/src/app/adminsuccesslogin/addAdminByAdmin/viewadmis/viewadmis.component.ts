import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../../services/adminlogin/adminservice.service';
import { Router } from '@angular/router';
import { Admin } from '../../../classfile/admin';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewadmis',
  templateUrl: './viewadmis.component.html',
  styleUrls: ['./viewadmis.component.css']
})


export class ViewadmisComponent implements OnInit {

  public admins!: Admin[];
  mainadminEamil: any;

  updateActive: boolean = false;
  constructor(public adminService: AdminserviceService, private router: Router) { }

  ngOnInit(): void {

    this.mainadminEamil = localStorage.getItem('adminemail');

    this.adminService.showAdminByEamil(this.mainadminEamil).subscribe(dta => {
      this.admins = dta;



    })

  }

  delete(adminid: number) {

    this.adminService.deleteData(adminid).subscribe(res => {

      console.log(res);

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: adminid + ' Id is Deleted',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['viewadmins'])
    }, error => {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: adminid + ' Id has been Deleted',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['newadmin']);


    });



  }
  openUpdate() {
    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })
    }
    this.updateActive = true
  }





  updateLowerAdmin(adminid: number, adminname: string, adminemail: string, adminphno: string, admingender: string, adminaddress: string, adminage: string, adminpassword: string) {


    localStorage.setItem("naid", "" + adminid);
    localStorage.setItem("naname", adminname);
    localStorage.setItem("naemail", adminemail);
    localStorage.setItem("naphno", adminphno);
    localStorage.setItem("nagender", admingender);
    localStorage.setItem("naage", adminage);
    localStorage.setItem("naaddress", adminaddress);
    localStorage.setItem("napassword", adminpassword);



    this.router.navigate(['upNewAdmin']);



  }

}
