import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { RegisterUser } from '../registerUser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerdUser:RegisterUser = new RegisterUser("","","","");
  message:any;
  errorMessage:any;
  constructor(private service: RestapiService, private router: Router){}
  ngOnInit(){
   
  }

  public registerNow(){
    console.log("Registered User: " + this.registerdUser.name, this.registerdUser.email,this.registerdUser.roles);
    let resp = this.service.register(this.registerdUser);
    resp.subscribe((data)=>{
    this.message=data;
    console.log("User Created: " + this.message);
    this.router.navigate(['/login'])
    },
    error=>{
      this.errorMessage = error.message;
      this.router.navigate(['/']);
    }
        
    );
  }

}
