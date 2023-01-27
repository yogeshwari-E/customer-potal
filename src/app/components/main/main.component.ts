import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CportalService } from 'src/app/cportal.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private customernumber : CportalService, public router:Router, private http:HttpClient) { }
  baseUrl : string='http://localhost:2000/cprofile';
  Data: any;
  num:any;
  name1:any;
  country:any;
  address:any;

  Telenumber:any;
  city:any;
  Postalcode:any;
  result:any;
  ngOnInit(): any {
    var a=localStorage.getItem("USERID")

  return this.http.post(this.baseUrl,{

    USERID : a

   
  }).subscribe(

    response =>{
      console.log(response)
     
      this.Data = JSON.parse(JSON.stringify(response));


      this.num = this.Data["KUNNR"];

      this.name1 = this.Data["NAME1"];
  
  
      this.country = this.Data["LAND1"];
      this.address = this.Data["ADRNR"];
  
   
      this.Telenumber = this.Data["TELF1"];

      this.city = this.Data["ORT02"];


      this.Postalcode = this.Data["CUSTOMER_INFO.PSTLZ"];
      console.log(this.name1);

      var result=this.Data;



    });

}


}
