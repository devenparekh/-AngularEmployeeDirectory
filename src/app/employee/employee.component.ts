import { Component } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  errorMessage:any;
  employees: any;

  constructor(private service: EmployeeServiceService){
  }
  ngOnInit(){
   
  }

  public getAllEmployees1(){
    this.service.getAllEmployees().subscribe((data)=>{
      this.employees = data;
      console.log("Response: "+ this.employees);
    },
    (error) =>{
      console.error('Error fetching employees: ', error);
    }
    );
  }
}
