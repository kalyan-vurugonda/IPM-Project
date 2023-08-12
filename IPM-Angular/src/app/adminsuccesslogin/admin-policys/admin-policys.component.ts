import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-policys',
  templateUrl: './admin-policys.component.html',
  styleUrls: ['./admin-policys.component.css']
})
export class AdminPolicysComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })
    }
  }

}
