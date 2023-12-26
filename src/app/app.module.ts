import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RestapiService } from './restapi.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './register-user/register-user.component';
import { JwtDecodeService } from './jwt-decode.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeModule } from './employee/employee.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterUserComponent,
    NavBarComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    EmployeeModule,
    AboutModule,
    ContactModule,
    ProductsModule
  ],
  providers: [RestapiService, JwtDecodeService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
