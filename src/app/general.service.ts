import { HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  isLogged:any;

  constructor(private router: Router) { 
    this.isLogged = localStorage.getItem('isLoggedIn');
    console.log("generalService");
  }

  logout() {
    sessionStorage.removeItem('token');
    localStorage.setItem('isLoggedIn',"false");
    localStorage.removeItem('Email');
    localStorage.removeItem('userName');
    localStorage.removeItem('UserRoles');
    localStorage.removeItem('ID');
    localStorage.removeItem('exp');
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
