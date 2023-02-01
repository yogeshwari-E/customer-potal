import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-payage',
  templateUrl: './payage.component.html',
  styleUrls: ['./payage.component.css']
})
export class PayageComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private sd: FormBuilder) { }
  inUrl: string = 'http://localhost:2000/payage';
  data: any;
  inquiry:any;
  ngOnInit(): any {
    var a = localStorage.getItem("USERID");
    console.log(a);
    return this.http.post(this.inUrl, { USERID: a })
     .subscribe(response => {

      this.data = JSON.parse(JSON.stringify(response));
      
    });
  }

}