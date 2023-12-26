import { Component } from '@angular/core';
import { AddEmployee } from './addEmployee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  registerdEmployee:AddEmployee = new AddEmployee("","","","",0 ,new Date(),0);
  message:any;
  frontMessage:any;
  errorMessage:any;

  constructor(private service: EmployeeServiceService){}
  ngOnInit(){
   
  }

  public registerEmployee(){
    console.log("Registering Employee: " + this.registerdEmployee.firstName, this.registerdEmployee.lastName,
    this.registerdEmployee.address,this.registerdEmployee.joinDate,this.registerdEmployee.project,this.registerdEmployee.ssn);
    let resp = this.service.register(this.registerdEmployee);
    resp.subscribe((data)=>{
    this.message=data;
    console.log("User Created: " + this.message);
    this.frontMessage = "Employee Saved! you can head Home!";
    },
    error=>{
      this.errorMessage = error.message;
      this.frontMessage = "Employee NOT saved. Try Again!";
    }   
    );
  }


}
