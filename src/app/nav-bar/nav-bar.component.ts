import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
 constructor(private router:Router){}
 
  public getLogin(){
    if(localStorage.getItem('isLoggedIn') === "true"){
      return false;
    }
    else{
      return true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.setItem('isLoggedIn',"false");
    localStorage.removeItem('Email');
    localStorage.removeItem('userName');
    localStorage.removeItem('UserRoles');
    localStorage.removeItem('ID');
    this.router.navigate(['/']);
  }
}
