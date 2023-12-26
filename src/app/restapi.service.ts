import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { RegisterUser } from './registerUser';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }


  public login(user: User){
    console.log("user data: " + user);
    return this.http.post("https://localhost:9090/authenticate",user,{responseType:'text' as 'json'});
  }

  public register(user: RegisterUser){
    console.log("user data: " + user);
    return this.http.post("https://localhost:9090/newUser",user,{responseType:'text' as 'json'});
  }

}
