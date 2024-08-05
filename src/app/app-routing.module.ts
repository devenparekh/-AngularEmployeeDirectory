import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EmployeeComponent } from './employee/employee.component';
import { authGuardGuard } from './auth-guard.guard';
import { AboutComponent } from './about/about/about.component';
import { ProductsComponent } from './products/products/products.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { ErrorStatusComponent } from './shared/error-status/error-status.component';
import { GeneralComponent } from './general/general.component';

const routes: Routes = [
  { path: '', component:GeneralComponent },
  { path: 'home', component:HomeComponent, canActivate:[authGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'product', component: ProductsComponent, canActivate:[authGuardGuard] },
  { path: 'about', component: AboutComponent, canActivate:[authGuardGuard] },
  { path: 'contact', component: ContactComponent, canActivate:[authGuardGuard] },
  { path: 'registerEmployee', component: AddEmployeeComponent, canActivate:[authGuardGuard] },
  { path: 'getAllEmployees', component: EmployeeComponent, canActivate:[authGuardGuard] },
  { path: 'error-status/:status', component: ErrorStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
