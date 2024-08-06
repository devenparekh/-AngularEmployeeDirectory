import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JwtDecodeService } from '../jwt-decode.service';
import { MatSidenav } from '@angular/material/sidenav';
import { EncryptionServiceService } from '../encryption-service.service';

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

  constructor(private router: Router, private jwtService:JwtDecodeService, private encryptionService: EncryptionServiceService){
   
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
    this.token = sessionStorage.getItem('token');
    const decodedToken = this.jwtService.deCodeToken(this.token);
    const userEmail = decodedToken['email'];
    localStorage.setItem('Email',this.encryptionService.encrypt(userEmail));
    this.name = decodedToken['sub'];
    localStorage.setItem('userName',this.encryptionService.encrypt(this.name));
    console.log('User Name:', this.name);
    const roles = decodedToken['roles'];
    localStorage.setItem('UserRoles',this.encryptionService.encrypt(roles));
    const id = decodedToken['ID'];
    localStorage.setItem('ID',id);
    const exp = decodedToken['exp'];
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
    localStorage.clear();
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
