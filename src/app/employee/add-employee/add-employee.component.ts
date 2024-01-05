import { Component } from '@angular/core';
import { AddEmployee } from './addEmployee';
import { EmployeeServiceService } from '../employee-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface ProjStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  projstatus: ProjStatus[] = [
    {value: 'active', viewValue: 'Active'},
    {value: 'inactive', viewValue: 'Inactive'},
    
  ];

  registerdEmployee:AddEmployee = new AddEmployee("","","","",0 ,new Date(),0);
  message:any;
  frontMessage:any;
  errorMessage:any;

  constructor(private service: EmployeeServiceService, private router: Router){}
  ngOnInit(){
   
  }

  public registerEmployee(){

    let resp = this.service.register(this.registerdEmployee);
    resp.subscribe(
    {
      next: (data) => {
        this.message = data;
        console.log('Response: ' + this.message);
        console.log("User Created: " + this.message);
        window.alert("Employee Details Saved!");
        this.router.navigate(["/home"]);
      },
      error:(error:HttpErrorResponse) => {
        this.errorMessage = error.message;
        this.frontMessage = "Employee NOT Saved. Try Again!";
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
      }
    });
  }
}
