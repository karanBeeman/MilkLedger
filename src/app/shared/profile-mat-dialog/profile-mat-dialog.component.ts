import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-mat-dialog',
  templateUrl: './profile-mat-dialog.component.html',
  styleUrls: ['./profile-mat-dialog.component.css']
})
export class ProfileMatDialogComponent implements OnInit {

  // user = "karankumar";
  // userEmail=  localStorage.getItem('username');
  profileForm!: FormGroup;
  passRegEx = '/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/';

  constructor( @Inject(MAT_DIALOG_DATA) public data : any , private fb: FormBuilder, public matDialogRef: MatDialogRef<ProfileMatDialogComponent>) { 
    console.log(data);
    
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username : ['', [Validators.required]],
      email : ['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      password : [
        '', 
        [Validators.minLength(6), Validators.pattern(this.passRegEx)]
      ],
      Confirm_password : [('')],
    });
    this.profileForm.patchValue({
      username : this.data.user,
      email : this.data.email
    })
  }


  updateProfileForm() {
    console.log(this.profileForm.value.username);
  }
  
  closeDialog() {
    this.matDialogRef.close();
  }
}
