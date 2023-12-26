import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user:User = new User("","");
  message:any;
  errorMessage: any;
  isLoggedIn:any;
  resp:Observable<Object> | undefined
  constructor(private service: RestapiService, private router: Router){}
  ngOnInit(){
   
  }

  public loginNow(){

    console.log("User: " + this.user.username);
    this.resp = this.service.login(this.user);
    this.resp.subscribe((data)=>{
    this.message=data;
    console.log("JWT Token received:" + this.message);
    localStorage.setItem('token',this.message);
    this.isLoggedIn === true;
    localStorage.setItem('isLoggedIn',"true");
    this.router.navigate(['/']);
    },
      (    error: { message: any; }) =>{
      this.errorMessage = error.message;
      console.log("Error Occurred: " + this.errorMessage);
      localStorage.setItem('isLoggedIn',"false");
      this.isLoggedIn = false;
    });
  }
}
