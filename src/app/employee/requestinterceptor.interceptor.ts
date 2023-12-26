import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Requestinterceptor implements HttpInterceptor {

  constructor() {}
  currentUser: any;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("inside interceptor.");

    if(localStorage.getItem('token') === null){
      return next.handle(request);
    }
    else{
      this.currentUser = localStorage.getItem('token');
      const modifiedReq = request.clone({
        headers: request.headers.set('Authorization',"Bearer "+this.currentUser)
      });
      return next.handle(modifiedReq);
    }
  }
}
