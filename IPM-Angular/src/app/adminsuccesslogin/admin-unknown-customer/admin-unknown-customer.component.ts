import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Unknownquery } from '../../classfile/unknownsms/unknownquery';
import Swal from 'sweetalert2';

export class AllUnknownData {
  constructor(
    public ucustomername: string,
    public usmsemail: string,
    public sms: string,
  ) { }

}
@Component({
  selector: 'app-admin-unknown-customer',
  templateUrl: './admin-unknown-customer.component.html',
  styleUrls: ['./admin-unknown-customer.component.css']


})
export class AdminUnknownCustomerComponent implements OnInit {



  public allUnknownData!: Unknownquery[]
  constructor(
    private httpClient: HttpClient, private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })
    }

    this.httpClient.get<any>('http://localhost:8085/getunknownsms').subscribe(
      response => {
        this.allUnknownData = response;
        console.log(this.allUnknownData);

      })
  }

  deleteSms(id: any) {

    this.httpClient.delete("http://localhost:8085/deleteusms/" + id).subscribe(() => {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: id + " id's Sms Deleted!",
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {

        this.httpClient.get<any>('http://localhost:8085/getunknownsms').subscribe(
          response => {
            this.allUnknownData = response;
            console.log(this.allUnknownData);

          })


      }, 2500)



    }, error => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: id + " id's Sms Deleted!",
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {

        this.httpClient.get<any>('http://localhost:8085/getunknownsms').subscribe(
          response => {
            this.allUnknownData = response;
            console.log(this.allUnknownData);

          })


      }, 2000)



    });
  }

}
