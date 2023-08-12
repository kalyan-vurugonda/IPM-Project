import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  write(inputValue: string): void {

    if (!inputValue || inputValue.trim() === '') {
      Swal.fire({
        icon: 'error',
        text: "Field missing..!",

      })
    }
    else {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: "Thank You for Writing to us..!",

      })

    }
  }

}
