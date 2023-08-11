import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  about() {
    this.router.navigate(['aboutus'])
  }
  contactus() {
    this.router.navigate(['contact'])

  }
  services() {
    this.router.navigate(['services'])
  }
  ulog() {
    this.router.navigate(['ulog'])
  }
  alog() {
    this.router.navigateByUrl('alog');
  }
}
