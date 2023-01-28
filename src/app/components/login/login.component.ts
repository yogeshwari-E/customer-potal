import { Component, OnInit, ɵgetUnknownElementStrictMode  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http'; 
import { FormBuilder } from '@angular/forms'; 
import { CportalService } from 'src/app/cportal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
dat: any;
  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // })


  constructor(private customernumber : CportalService ,private router: Router, private http: HttpClient, private sd: FormBuilder) { } 
  loginForm = this.sd.group({ email: [''], password: [''] }) 
   ngOnInit(): void { this.dat = 'hello'} 
   onSave() {this.customernumber.setData(this.dat)}
  inUrl:string = 'http://localhost:2000/auth'; data: any; 
  log() { 
  this.login(this.loginForm.value.email, 
  this.loginForm.value.password) 
  } 
  login(userid: any, password: any) { 
    console.log(password);
  this.http.post(this.inUrl, 
  { USERID: userid, PASSWORD: password }).subscribe(response => 
    
    { this.data = JSON.parse(JSON.stringify(response)); 
      console.log(response);
  var result = this.data; 
  if(result === '"0"') { 
    localStorage.setItem("USERID",userid);
  this.router.navigate(['/main']); 
  alert("Succesfully logged in!!");
  } else { alert("Something is wrong!!"); } } );  

  this.http.post(this.inUrl,{ USERID: userid, PASSWORD: password }).subscribe((resp)=>{
      console.log(resp)
  },(err)=>{
    console.log(err)
})


}



  
}
