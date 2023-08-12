import { Component, OnInit } from '@angular/core';
import { QueryCustomer } from 'src/app/classfile/QueryByCustomer/query-customer';
import { QuestionCustomerServiceService } from 'src/app/services/QuestionCustomerService/question-customer-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  q = new QueryCustomer

  constructor(private questinservice: QuestionCustomerServiceService, private router: Router) { }


  sms!: QueryCustomer[];


  ngOnInit(): void {

    let e: any = localStorage.getItem('cemail');
    this.q.customeremail = e;
    this.getSms();
  }

  getSms() {

    this.questinservice.getSmsEmail(this.q.customeremail).subscribe(data => {
      this.sms = data;
      console.log(data)
    }, error => {

      alert('Internal Problem Please wait')
    })

  }



  sendQ() {


    if (this.q.qtopic === undefined || this.q.qdetails === undefined) {

      console.warn(this.q);

      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: "Please Fill Up Every Field!",

      })
    }
    else {




      Swal.fire({
        title: 'Are you sure?',
        text: "Dou You want Send Query!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Send It!'
      }).then((result) => {
        if (result.isConfirmed) {


          this.questinservice.sendSms(this.q).subscribe(query => {



            Swal.fire(
              'Sent!',
              'Your Query has been sent.',
              'success'
            )

          }, error => {

            Swal.fire(
              'Opps!',
              'Something Wend Wrong Please wait',
              'error'
            )
          })
          setTimeout(() => {


            this.router.navigate(['queries']).then(() => {
              window.location.reload()
            })

          }, 1000)
        }
      })



    }



  }


}
