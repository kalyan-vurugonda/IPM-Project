import { Component, OnInit } from '@angular/core';
import { ApplyPolicie } from '../../classfile/ApplyPolicies/apply-policie';
import { Router } from '@angular/router';

import { ApplyPoliciesServiceService } from '../../services/ApplyPolicies/apply-policies-service.service';
import { PolicysService } from 'src/app/services/Policy/policys.service';
import { Policye } from 'src/app/classfile/Policy/policye';
import { History } from '../history/history.component';
import { Type } from '@angular/compiler';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  checkApply: boolean = true;
  checkAfterApply: boolean = false;
  history!: History
  p!: Policye[];
  selectamount!: boolean
  customername!: any
  customeremail!: any;
  apply = new ApplyPolicie();
  constructor(private applypolicyService: ApplyPoliciesServiceService,
    private router: Router, private policyservice: PolicysService) { }



  app = new ApplyPolicie();

  ngOnInit(): void {
    this.policyservice.getPolicies().subscribe(data => {

      console.log(data);
      this.p = data.map(policy => ({ ...policy, applied: false }));

    }, error => {
      alert("Internal Server error ...")
      this.router.navigate(['ulog/sucessLogin'])
    })

    this.customeremail = localStorage.getItem('cemail');
    this.customername = localStorage.getItem('cname');

  }
  applyPolicie() {
    this.checkApply = false;
    this.checkAfterApply = true;




    this.customeremail = localStorage.getItem('cemail');
    ;



  }

  ltt(pid: number, pname: string, pcatagory: string, policyPrice: string) {

    if (policyPrice == "") {
      this.selectamount = true;


    } else {
      console.warn();

      this.checkApply = false;
      this.checkAfterApply = true
      this.app.policyName = pname;
      this.app.policyPrice = policyPrice; // Use the passed policyPrice

      this.app.policyCatagory = pcatagory;
      this.app.policyPrice = this.app.policyPrice;
      this.app.customeremail = this.customeremail;
      this.app.customername = this.customername;




      // console.log(this.app)
      console.warn(this.app)
      console.log(pid + "------ " + pname + "----" + pcatagory + "-------");
      this.p = this.p.map(policy => {
        if (policy.pid === pid) {
          return { ...policy, applied: true };
        }
        return policy;
      });
      this.myApplication()


    }



  }

  myApplication() {

    console.log("=============")
    console.warn(this.app)
    this.applypolicyService.appPolicy(this.app).subscribe(reply => {
      // alert("you have applied successfully "+this.app.policyCatagory);

      Swal.fire({
        title: 'Thanks For Apply </br>' + this.app.policyName,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      console.log(reply);
      setTimeout(() => {
        this.router.navigate(['history'])

      }, 10000)


    }, error => {
      Swal.fire({

        icon: 'error',
        title: 'Already Applied',
        text: ' Wait for Admin Action',

      })
      setTimeout(() => {
        this.router.navigate(['history'])

      }, 5000)




    })
  }


}
