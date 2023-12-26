import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Requestinterceptor } from './requestinterceptor.interceptor';
import { EmployeeServiceService } from './employee-service.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:[EmployeeServiceService, { provide: HTTP_INTERCEPTORS, useClass: Requestinterceptor, multi:true }]
})
export class EmployeeModule { }
