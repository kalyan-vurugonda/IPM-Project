import { Component, OnInit } from '@angular/core';
import { ApplyPolicie } from '../../../classfile/ApplyPolicies/apply-policie';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applied-policy-holder',
  templateUrl: './applied-policy-holder.component.html',
  styleUrls: ['./applied-policy-holder.component.css']
})
export class AppliedPolicyHolderComponent implements OnInit {

  public isPending!: string
  public status!: string



  allApplyData!: ApplyPolicie[]

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  public application = new ApplyPolicie();
  ngOnInit(): void {

    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })
    }
    this.getData();
  }


  getData() {

    this.isPending = "Pending"
    this.httpClient.get<ApplyPolicie[]>('http://localhost:8085/getcustomersByPending').subscribe(
      response => {
        this.allApplyData = response;
        // this.getData();
        console.log(this.allApplyData);

      })
  }

  doApprove() {
    this.application.status = "Approved";
    this.getData();
  }

  doReject() {
    this.application.status = "Rejected";


    this.getData();

  }
  doSave(appid: number) {

    this.httpClient.put<ApplyPolicie>("http://localhost:8085/updatestatus/" + appid, this.application).subscribe(response => {
      console.log(response);
      //this.getData();
      // alert("Status Updated")

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: appid + ' id has status Change!',
        showConfirmButton: false,
        timer: 2200
      })

    }, error => {
      this.getData();



      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: appid + ' id has been  ' +
          this.application.status,
        showConfirmButton: false,
        timer: 2200
      })

    });
    // localStorage.setItem("appid",appid);
  }


}
