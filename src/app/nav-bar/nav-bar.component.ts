import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
 constructor(private gService: GeneralService){}
 
  public getLogin(){
    if(localStorage.getItem('isLoggedIn') === "true"){
      return false;
    }
    else{
      return true;
    }
  }

  logout() {
    this.gService.logout();
  }
}
