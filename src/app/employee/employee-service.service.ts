import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEmployee } from './add-employee/addEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  getAllEmployees(){
    console.log("Inside get ALL Employees Method.");
    return this.http.get("https://localhost:9090/employee/getAllEmployees",{responseType:'text' as 'json'});
  }

  public register(user: AddEmployee){
    console.log("Employee data: " + user);
    return this.http.post("https://localhost:9090/employee/addNewEmployee",user,{responseType:'text' as 'json'});
  }


}
