import { Component } from '@angular/core';
import { ProductsDataCallService } from '../products-data-call.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  columns = [
    'projectId',
    'projectName',
    'BillingRate',
    'PayRate',
    'projectStartDate',
    'projectEndDate',
    'invoicingEmail',
    'billingCycle',
    'employeeId',
  ];

  isLoggedIn:any;
  showContent1: boolean = false;
  showContent2: boolean = false;
  projects: any;
  projById:any;
  errorMessage:any;
  projId:any;
  dataArr:any;

  constructor(private service: ProductsDataCallService, private router:Router) {
    this.isLoggedIn = localStorage.getItem('isLoggedIn')
  }
  ngOnInit() {}

  allProjClick() {
    this.showContent1 = true;
    this.showContent2 = false;
    }

  ProjidClick() {
    this.showContent1 = false;
    this.showContent2 = true;
    } 

  public getAllProjects() {

    this.service.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
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

  public getProjectById() {
    console.log('get Details for id: ' + this.projId);
    this.service.getProjectById(this.projId).subscribe({
      next: (data: any) => {       
        this.projById = data;
        this.dataArr = new Array(this.projById);
        console.log('Response: ' + this.projById);
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

}
