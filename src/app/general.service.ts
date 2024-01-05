import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('token');
    localStorage.setItem('isLoggedIn',"false");
    localStorage.removeItem('Email');
    localStorage.removeItem('userName');
    localStorage.removeItem('UserRoles');
    localStorage.removeItem('ID');
    localStorage.removeItem('exp');
    this.router.navigate(['/']);
  }
}
