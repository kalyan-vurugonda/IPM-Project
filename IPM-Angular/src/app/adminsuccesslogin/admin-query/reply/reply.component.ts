import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { QueryCustomer } from '../../../classfile/QueryByCustomer/query-customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  id!: number;


  constructor(private http: HttpClient,
    public router: Router) { }

  public questions = new QueryCustomer;


  ngOnInit(): void {
    if (localStorage.getItem('adminemail') === undefined) {




      this.router.navigate(['alog']);
    }
    let rid = localStorage.getItem('replyid')
    this.id = Number(rid);
  }

  sendAns() {

    if (this.questions.qanswer === undefined || this.questions.qanswer === "" || this.questions.qanswer === null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: "Don't send Empty Sms!",

      })
    } else {

      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Sent!',
        denyButtonText: `Don't Send`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {


          Swal.fire('Sent..!', '', 'success')
          this.http.put<any>("http://localhost:8085/ans/" + this.id, this.questions).subscribe(responce => {

            setTimeout(() => {


              this.router.navigate(['adminQuery']).then(
                () => {

                  window.location.reload();
                }
              )

            }, 3000)




          }, error => {

            console.warn(error);

            Swal.fire({
              icon: 'error',
              title: 'Oops..',
              text: 'Something went wrong!',

            })
          });


        } else if (result.isDenied) {


          Swal.fire('Sms not Send, Try Again!', '', 'info')
        }
      })

      //console.log(typeof this.id+"    "+this.questions.qanswer);

    }
  }


}
