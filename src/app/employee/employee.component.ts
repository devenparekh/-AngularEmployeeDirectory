import { Component } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';
import { GetEmployee } from './add-employee/getEmployee';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {

  columns = [
    'employeeId',
    'firstName',
    'lastName',
    'address',
    'project',
    'ssn',
    'joinDate',
    'status',
  ];

  errorMessage:any;
  // To get All Employee Values
  employees: any;
  employees1:any;
  employees2:any;
 
  //For search By ID
  empById: any;
  empByFname: any;
  empByLname: any;
  empByAddress: any;
  empByProject: any;
  empBySSN: any;
  empByJDate: any;
  empByStatus: any;
  
  empId: any;
  empName: any;
  datasource:any;

  message!: any;
  isLoggedIn:any;

  showContent1: boolean = false;
  showContent2: boolean = false;
  showContent3: boolean = false;
  
  constructor(private service: EmployeeServiceService, private router:Router) {
    this.isLoggedIn = localStorage.getItem('isLoggedIn')
  }
  ngOnInit() {}

  public getAllEmployees1() {

    this.service.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error:HttpErrorResponse) => {
        console.error('Error fetching employees: ', error);
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
      },
    });
  }

  public getEmployeesById() {

    this.message = localStorage.getItem('token');
    console.log('get Details for id: ' + this.empId);
    this.service.getEmployeeById(this.empId).subscribe({
      next: (data: any) => {       
        this.employees2 = data;
        console.log('Response: ' + this.employees2);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching employees: ', error);
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
      },
    });
  }

  public getEmployeesByName() {

    console.log('get Details for Name: ' + this.empName);
    this.service.getEmployeeByName(this.empName).subscribe({
      next: (data: any) => {
        this.employees1 = data;
        console.log(typeof data);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching employees: ', error);
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
      },
    });
  }

  allEmpClick() {
    this.showContent1 = true;
    this.showContent2 = false;
    this.showContent3 = false;
    }

  empidClick() {
    this.showContent1 = false;
    this.showContent2 = true;
    this.showContent3 = false;
    }

  empnameClick() {
    this.showContent1 = false;
    this.showContent2 = false;
    this.showContent3 = true;
      }  
}


