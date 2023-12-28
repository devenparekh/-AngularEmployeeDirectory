import { Component } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';
import { GetEmployee } from './add-employee/getEmployee';

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
 
  //For search By ID
  empById: any;
  empByFname: any;
  empByLname: any;
  empByAddress: any;
  empByProject: any;
  empBySSN: any;
  empByJDate: any;
  empByStatus: any;

  //For search By Name
  empByNameId: any;
  empByNameFname: any;
  empByNameLname: any;
  empByNameAddress: any;
  empByNameProject: any;
  empByNameSSN: any;
  empByNameJDate: any;
  empByNameStatus: any;
  
  empId: any;
  empName: any;
  datasource:any;
  
  constructor(private service: EmployeeServiceService) {
  }
  ngOnInit() {}

  public getAllEmployees1() {
    this.service.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        console.log('Response: ' + this.employees);
      },
      error: (error) => {
        console.error('Error fetching employees: ', error);
      },
    });
  }

  public getEmployeesById() {
    console.log('get Details for id: ' + this.empId);
    this.service.getEmployeeById(this.empId).subscribe({
      next: (data: any) => {
        this.datasource = data;
        this.empById = <GetEmployee>data.employeeId;
        this.empByFname = <GetEmployee>data.firstName;
        this.empByLname = <GetEmployee>data.lastName;
        this.empByAddress = <GetEmployee>data.address;
        this.empByProject = <GetEmployee>data.project;
        this.empBySSN = <GetEmployee>data.ssn;
        this.empByJDate = <GetEmployee>data.joinDate;
        this.empByStatus = <GetEmployee>data.status;
        // this.datasource.push(
        //   <GetEmployee>this.empById,
        //   <GetEmployee>this.empByFname,
        //   <GetEmployee>this.empByLname,
        //   <GetEmployee>this.empByAddress,
        //   <GetEmployee>this.empByProject,
        //   <GetEmployee>this.empBySSN,
        //   <GetEmployee>this.empByJDate,
        //   <GetEmployee>this.empByStatus
        // )
        console.log('Response: ' + this.empById);
      },
      error: (error: any) => {
        console.error('Error fetching employees: ', error);
      },
    });
  }

  public getEmployeesByName() {
    console.log('get Details for id: ' + this.empId);
    this.service.getEmployeeByName(this.empName).subscribe({
      next: (data: any) => {
        console.log(typeof data);
        this.empByNameId = <GetEmployee>data.employeeId;
        this.empByNameFname = <GetEmployee>data.firstName;
        this.empByNameLname = <GetEmployee>data.lastName;
        this.empByNameAddress = <GetEmployee>data.address;
        this.empByNameProject = <GetEmployee>data.project;
        this.empByNameSSN = <GetEmployee>data.ssn;
        this.empByNameJDate = <GetEmployee>data.joinDate;
        this.empByNameStatus = <GetEmployee>data.status;

        console.log('Response: ' + this.empById);
      },
      error: (error: any) => {
        console.error('Error fetching employees: ', error);
      },
    });
  }
}


