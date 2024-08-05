import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtDecodeService {
  private jwtHelper: JwtHelperService;
  constructor() { 
    this.jwtHelper = new JwtHelperService();
  }

  public deCodeToken(token:string):any {
    return this.jwtHelper.decodeToken(token);
  }

  public isAuthenticated(): boolean {
    console.log (sessionStorage['token']);
    const token = sessionStorage.getItem('token');
    // Check wheter the token is expired and return true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

}
