import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MilkDetailsService } from 'src/app/milk-details.service';
import { ForgotPasswordComponent } from 'src/app/shared/forgot-password/forgot-password.component';
import { LoginRegisterService } from 'src/app/shared/login-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mediaSub!: Subscription;
  private activeMediaQuery = '';
  deviceXs!: boolean;
  
  hide=true;
  
  constructor(private router: Router, private observable: MilkDetailsService, private mediaObserver:MediaObserver, private dialog : MatDialog
           ,private LoginRegister : LoginRegisterService) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((change) => {
      change.forEach((item) => {
       this.activeMediaQuery = item.mqAlias;
       this.deviceXs = item.mqAlias === 'lt-xl' ? true : false;
      })
      console.log(this.activeMediaQuery);
    });
    
    // this.observable.myObservable.next(this.hide);
  }
  loginForm: FormGroup = new FormGroup(
    {
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.minLength(6)])
    }
  );
  onLogin() {
    if(this.loginForm.valid) {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o');
      this.loginForm.value.email=="kbeemara@ford.com"? localStorage.setItem('userType', 'employee'): localStorage.setItem('userType', 'admin');
      localStorage.setItem('username', this.loginForm.value.email);
    
      // setTimeout(() => { // Only for demonstration purpose
      //   this.observable.myObservable.next(false);
      // }, 2000);
      // this.hide=false;
      // this.observable.myObservable.next(this.hide);
      this.LoginRegister.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(data => {
        console.log(data);
      });
    this.router.navigateByUrl('milk');
     

    }

}
onRegister() {
  this.router.navigateByUrl('home/register');
}

onForgotPassword() {
  const dialogRef = this.dialog.open(ForgotPasswordComponent, {
    disableClose: true,
    autoFocus: false
  });
}
// togglePasswordVisibility(): void {
//   this.hide = !this.hide;
// }

// onInput(name : any) {
//   console.log(this.loginForm);
//   console.log(this.loginForm?.controls['email'].hasError('email'))
// }
}
