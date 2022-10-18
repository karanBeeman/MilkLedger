import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileMatDialogComponent } from 'src/app/shared/profile-mat-dialog/profile-mat-dialog.component';



@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {
  mediaSub!: Subscription;
  private activeMediaQuery = '';
  deviceXs!: boolean;
  editable : boolean = false;
  mark! : any;
  user!: any;
  
  enableEditIndex = null;
  cellEdit = false;

  constructor(private mediaObserver:MediaObserver, public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((change) => {
      change.forEach((item) => {
       this.activeMediaQuery = item.mqAlias;
       this.deviceXs = item.mqAlias === 'lt-xl' ? true : false;
      })
      console.log(this.activeMediaQuery);
    });
    this.user = localStorage.getItem('username');
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
 }

 milkcustomer() {
  console.log('clicked');
   this.router.navigateByUrl('milk-customer');
 }

 openDialog(): void {
  const dialogRef = this.dialog.open(ProfileMatDialogComponent, {
    disableClose: true,
    data: {
        "user" : "karan",
        "email" : "karan@gmail.com"
    },
    autoFocus: false
  });
 }
}
