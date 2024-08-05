import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RestapiService } from '../restapi.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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

    this.resp.subscribe(
      {
      next:(data) =>{
          this.message=data;
          console.log("JWT Token received:" + this.message);
          sessionStorage.setItem('token',this.message);
          this.isLoggedIn === true;
          localStorage.setItem('isLoggedIn',"true");
          this.router.navigate(['/home']);
      },
      error:(error:HttpErrorResponse) => {
        this.errorMessage = error.message;
      console.log("Error Occurred: " + this.errorMessage);
      if(error instanceof HttpErrorResponse){
        if(error.status === 0){
          this.errorMessage = "Server is Down";
          this.router.navigate(['/error-status', error.status]);
        }
        else if(error.status === 400){
          this.router.navigate(['/error-status', error.status]);
        }
        else if(error.status === 403){
          this.router.navigate(['/error-status', error.status]);
        }
        else if(error.status === 500){
          this.router.navigate(['/error-status', error.status]);
        }
        else if(error.status === 401){
          this.router.navigate(['/error-status', error.status]);
        }
        else if(error.status === 404){
          this.router.navigate(['/error-status', error.status]);
        }
        else if(error.status === 503){
          this.router.navigate(['/error-status', error.status]);
        }
      }
      localStorage.setItem('isLoggedIn',"false");
      this.isLoggedIn = false;
      }       
    });
  }
}
