import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  ForgotpassForm!: FormGroup;
  passRegEx = '/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/';

  constructor(public matDialogRef: MatDialogRef<ForgotPasswordComponent>, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.ForgotpassForm = this.fb.group({
      username : ['', [Validators.required]],
      email : ['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      password : [
        '', 
        [Validators.minLength(6), Validators.pattern(this.passRegEx)]
      ],
      Confirm_password : [('')],
    });
  }

  closeDialog() {
    this.matDialogRef.close();
  }

}
