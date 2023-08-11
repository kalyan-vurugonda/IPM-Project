import { Component, OnInit } from '@angular/core';
import { Policye } from '../../../../classfile/Policy/policye';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-apply-update',
  templateUrl: './apply-update.component.html',
  styleUrls: ['./apply-update.component.css']
})
export class ApplyUpdateComponent implements OnInit {

  pid!: number
  public updateData = new Policye();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  UpdateNow() {
    this.pid = Number(localStorage.getItem("policyId"));
    console.log(this.pid + " " + this.updateData.policycatagory);

    this.http.put<Policye>("http://localhost:8085/updatepolicy/" + Number(this.pid), this.updateData).subscribe(response => {


      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: this.pid + " id's has been Updated",
        text: this.updateData.policyname + " has beend Saved",
        showConfirmButton: false,
        timer: 4500
      })

      setTimeout(() => {

        this.router.navigate(['updatePolicy']).then(

          () => {
            window.location.reload();
          }

        )

      }, 5200)

    }, error => {

      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'Something Went Wrong, Please Wait!'
      })
    });
  }


}
