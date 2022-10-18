import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  isActive =false;
 


  constructor() { }

  ngOnInit(): void {
  

  }

  
  changeLang(lang:any) {
    console.log(lang.target.value);
  }


}
