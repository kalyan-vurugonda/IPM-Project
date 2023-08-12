import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-services-ipm',
  templateUrl: './services-ipm.component.html',
  styleUrls: ['./services-ipm.component.css']
})
export class ServicesIpmComponent implements OnInit {

  constructor(private routr:Router) { }

  ngOnInit(): void {
  }

  login(){

        this.routr.navigate(['ulog']);
  }

}
