import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/loginservice/user-login.service';
import { UserviceService } from 'src/app/services/ureg/uservice.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { User } from 'src/app/classfile/user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    public userservice: UserviceService,
    public router: Router,
    private loginService: UserLoginService
  ) { }

  public user = new User();
  email!: any;
  pass!: any;

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  ngOnInit(): void {
    this.email = localStorage.getItem('cemail');
    this.user.cemail = this.email;
    this.pass = localStorage.getItem('cpassword');
    this.user.cpassword = this.pass;
    this.loginService.afterLoginData(this.user).subscribe((response) => {
      this.user = response;
    });
  }
  isPasswordValid(password: string): boolean {
    // Password validation logic
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    return passwordPattern.test(password);
  }
  updatePassword() {
    if(this.oldPassword===''||this.newPassword===''||this.confirmPassword==='')
    {
      Swal.fire({
        icon: 'error',
        text: 'Fields missing',
      });
      return;
    }
    else if (this.pass !== this.oldPassword) {
      Swal.fire({
        icon: 'error',
        text: 'Old password Incorrect',
      });
      return;
    } 
    else if (!this.isPasswordValid(this.newPassword)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Password should contain minimun 8 characters with atleast one lower, one upper and one digit.',
      });
    }
    else if (this.newPassword !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Passwords Mismatch',
        text: 'New passwords do not match.',
      });
      return;
    }
  else{
    this.user.cpassword = this.newPassword; // Update user object with new password
  
    this.userservice.UpdtaeUser(this.user, this.email).subscribe(
      () => {
        
      },
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Password Updated',
          text: 'Your password has been updated successfully.',
        });
        this.clearPasswordFields();
        this.router.navigate(['ulog']); // Navigate to login page


      }
      
    );
  }
  }
  
  

  clearPasswordFields() {
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }
}
