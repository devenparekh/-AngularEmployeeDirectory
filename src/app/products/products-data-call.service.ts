import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './products/Project';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataCallService {
  resp:any;
  constructor(private http:HttpClient) { }

  getAllProjects(){
    console.log("Inside get ALL Projects Method.");
    return this.http.get("http://localhost:9091/project/getAllProjectDetails");
  }

  getProjectById(projId:number){
    console.log("Inside get Project By ID Method.");
   this.resp =  this.http.get("http://localhost:9091/project/getProjectDetails/"+projId);
   return this.resp;
  }

  public register(project: Project){
    console.log("Employee data: " + project);
    return this.http.post("http://localhost:9091/project/addNewProject",project,{responseType:'text' as 'json'});
  }

}
