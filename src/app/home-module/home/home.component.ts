import { Component, OnInit } from '@angular/core';
import { MilkDetailsService } from 'src/app/milk-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showHeader! : boolean;

  constructor(private Observable: MilkDetailsService) {
    this.Observable.myObservable.subscribe(isShowHeader =>{
      this.showHeader = isShowHeader;
      console.log(this.showHeader);
    })
   }

  ngOnInit(): void {
    this.showHeader = true;
  }


}
