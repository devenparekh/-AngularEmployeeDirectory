import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEmployee } from './add-employee/addEmployee';
import { Observable } from 'rxjs';
import { GetEmployee } from './add-employee/getEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  resp:any;

  constructor(private http:HttpClient) { }

  getAllEmployees(){
    console.log("Inside get ALL Employees Method.");
    return this.http.get("https://localhost:9090/employee/getAllEmployees");
  }

  getEmployeeById(empId:number){
    console.log("Inside get Employees By ID Method.");
   this.resp =  this.http.get("https://localhost:9090/employee/getEmployeeById/"+empId);
   return this.resp;
  }

  getEmployeeByName(empName:string){
    console.log("Inside get Employees By Name Method.");
   this.resp =  this.http.get("https://localhost:9090/employee/getEmployeeByName/"+empName);
   console.log(typeof this.resp);
   return this.resp;
  }

  public register(user: AddEmployee){
    console.log("Employee data: " + user);
    return this.http.post("https://localhost:9090/employee/addNewEmployee",user,{responseType:'text' as 'json'});
  }


}
