import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsDataCallService } from './products-data-call.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Requestinterceptor } from '../employee/requestinterceptor.interceptor';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  providers:[ProductsDataCallService, { provide: HTTP_INTERCEPTORS, useClass: Requestinterceptor, multi:true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService]
})
export class ProductsModule { }
