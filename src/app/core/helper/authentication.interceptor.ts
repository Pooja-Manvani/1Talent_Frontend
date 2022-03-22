import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private tokenservice:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<string>> {
    const tokenReq = request.clone({
      setHeaders:{
        Authorization:`Bearer ${this.tokenservice.getToken()}`
        
      }
    })
    return next.handle(tokenReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error.error);
      })
    )
  }
}
