import { Component, OnInit } from '@angular/core';
import { Policye } from '../../../classfile/Policy/policye';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {

  addData = new Policye();

  constructor(public HttpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })
    }
  }

  public addPolicy(addData: Policye) {
    return this.HttpClient.post("http://localhost:8085/addpolicys", addData);
  }


  public addNow() {
    console.warn(this.addData);
    this.addPolicy(this.addData).subscribe(reply => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: this.addData.policycatagory + ' has been Added',
        showConfirmButton: false,
        timer: 3500
      })
    }, error => {

      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'Fields missing!'
      })

    });

  }

}
