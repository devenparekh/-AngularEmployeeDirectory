import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JwtDecodeService } from '../jwt-decode.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  token: any;
  name: any;
  isLoggedIn:any;

  constructor(private router: Router, private jwtService:JwtDecodeService){
   
    if(localStorage.getItem('isLoggedIn') === "true"){
      console.log("Inside home constructor.");
      this.getClaims();
      this.isLoggedIn = localStorage.getItem('isLoggedIn');
    }
  }
  ngOnInit(){
   
  }

  public getLogin(){
    if(localStorage.getItem('isLoggedIn') === "true"){
      return false;
    }
    else{
      return true;
    }
  }

  public getClaims(){
    this.token = localStorage.getItem('token');
    const decodedToken = this.jwtService.deCodeToken(this.token);
    const userEmail = decodedToken['email'];
    console.log('User Email:', userEmail);
    localStorage.setItem('Email',userEmail);
    this.name = decodedToken['sub'];
    console.log('User Name:', this.name);
    localStorage.setItem('userName',this.name);
    const roles = decodedToken['roles'];
    console.log('UserRoles:', roles);
    localStorage.setItem('UserRoles',roles);
    const id = decodedToken['ID'];
    console.log('ID:', id);
    localStorage.setItem('ID',id);
    const exp = decodedToken['exp'];
    console.log('exp:', exp);
    localStorage.setItem('exp',exp);
  }


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

 
  // toggleMenu() {
  //   if(this.isMobile){
  //     this.sidenav.toggle();
  //     this.isCollapsed = false; // On mobile, the menu can never be collapsed
  //   } else {
  //     this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
  //     this.isCollapsed = !this.isCollapsed;
  //   }
  // }
}
