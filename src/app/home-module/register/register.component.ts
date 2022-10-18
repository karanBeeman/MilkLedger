import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { passwordMatchingValidatior } from '../form-fields.validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mediaSub!: Subscription;
  private activeMediaQuery = '';
  deviceXs!: boolean;

  hide = true;
  passRegEx = '/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/';
  constructor(public router : Router, private mediaObserver:MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((change) => {
      change.forEach((item) => {
       this.activeMediaQuery = item.mqAlias;
       this.deviceXs = item.mqAlias === 'lt-xl' ? true : false;
      })
      console.log(this.activeMediaQuery);
    });
  }

  registerForm: FormGroup = new FormGroup(
    {
      email : new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])),
      password : new FormControl(
        '', 
        [Validators.minLength(6), Validators.pattern(this.passRegEx)]
      ),
      Confirm_password : new FormControl(''),
      username : new FormControl('', [Validators.minLength(6)])
    },
    { validators: passwordMatchingValidatior }
  );

   onRegisterForm() {

   }

   onLogin() {
     this.router.navigateByUrl('home/login');
   }
}
