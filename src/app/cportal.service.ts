import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CportalService {

  constructor() { }
  dat: any;

  setData(dat: any) {
    this.dat = dat;
  }

  getData() {
    return this.dat;
}



}
