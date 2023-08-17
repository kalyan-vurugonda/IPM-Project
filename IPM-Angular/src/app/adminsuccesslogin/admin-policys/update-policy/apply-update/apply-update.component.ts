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
    this.pid = Number(localStorage.getItem("policyId"));
    console.log(this.pid);
    console.log("before", this.updateData.policycatagory);

    // Fetch data using HTTP call and assign it to updateData
    this.http.get<Policye>("http://localhost:8085/getpolicy/" + this.pid).subscribe((data: Policye) => {
      this.updateData = data; // Assign fetched data to updateData
      console.log("after", this.updateData.policycatagory);

    });
  }



  UpdateNow() {
    this.pid = Number(localStorage.getItem("policyId"));
    console.log(this.pid + " " + this.updateData.policycatagory);
    if (this.updateData.policyname === "" || this.updateData.policyname === undefined) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Fields cannot be empty',
        showConfirmButton: false,
      })
    }

    else {

      this.http.put<Policye>("http://localhost:8085/updatepolicy/" + Number(this.pid), this.updateData).subscribe(response => {


        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: this.pid + " id's has been Updated",
          text: this.updateData.policyname + " has been Saved",
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


}
