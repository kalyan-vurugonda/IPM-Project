import { Component, OnInit } from '@angular/core';
import { ApplyPolicie } from '../../../classfile/ApplyPolicies/apply-policie';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Policye } from '../../../classfile/Policy/policye';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-policy',
  templateUrl: './delete-policy.component.html',
  styleUrls: ['./delete-policy.component.css']
})
export class DeletePolicyComponent implements OnInit {

  public allPolicyData!: Policye[]

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })
    }

    this.httpClient.get<any>('http://localhost:8085/getpolicys').subscribe(
      response => {
        this.allPolicyData = response;
        console.log(this.allPolicyData);

      })

  }
  deletePolicy(pid: number) {


    const deletePoint = 'http://localhost:8085/deletepolicy/' + pid;

    this.httpClient.delete<number>(deletePoint).subscribe(response => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: pid + "id's Policy has been Deleted",
        showConfirmButton: false,
        timer: 2500
      })

      setTimeout(() => {
        this.httpClient.get<any>('http://localhost:8085/getpolicys').subscribe(
          response => {
            this.allPolicyData = response;
            console.log(this.allPolicyData);

          })

      }, 2500)







    })
  }
}
