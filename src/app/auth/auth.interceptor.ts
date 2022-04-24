import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>>{

      const jwtToken = localStorage.getItem("jwt_token");

      if(jwtToken){
        const cloned = req.clone({
          headers: req.headers.set("Authorization", "Bearer " + jwtToken)
        });

        return next.handle(cloned);
      }
      else{
        return next.handle(req);
      }
    }
}
