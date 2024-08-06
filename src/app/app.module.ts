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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { GeneralService } from './general.service';
import { SharedModule } from './shared/shared.module';
import { GeneralComponent } from './general/general.component';
import { EncryptionServiceService } from './encryption-service.service';
import { ProductsComponent } from './products/products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterUserComponent,
    NavBarComponent,
    EmployeeComponent,
    GeneralComponent,
    ProductsComponent
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
    ProductsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    SharedModule
  ],
  providers: [RestapiService, JwtDecodeService,GeneralService,EncryptionServiceService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
