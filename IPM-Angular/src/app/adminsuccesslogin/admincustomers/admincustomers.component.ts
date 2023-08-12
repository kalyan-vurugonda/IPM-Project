import { Component, OnInit } from '@angular/core';
import { User } from '../../classfile/user';
import { Route, Router } from '@angular/router';
import { UserviceService } from 'src/app/services/ureg/uservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admincustomers',
  templateUrl: './admincustomers.component.html',
  styleUrls: ['./admincustomers.component.css']
})
export class AdmincustomersComponent implements OnInit {

  allCustomerData!: User[]

  constructor(
    private cs: UserviceService
    ,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })
    }

    this.cs.getAllCustomers().subscribe(result => {
      this.allCustomerData = result;
      // console.log(this.allCustomerData);

    })
  }
  deleteCustomer(cid: number) {

    this.cs.deleteCustomer(cid);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: cid + " id's Data Deleted!",
      showConfirmButton: false,
      timer: 3500
    })

    setTimeout(() => {
      this.cs.getAllCustomers().subscribe(result => {
        this.allCustomerData = result;


      })
    }, 3000)


  }

}
