import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MilkDetailsService {
  [x: string]: any;
  next(val: any) {
    throw new Error('Method not implemented.');
  }
  public myObservable = new Subject<boolean>();
  constructor() { }

  
}
