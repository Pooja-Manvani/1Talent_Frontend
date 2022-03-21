import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private tokenservice:TokenService) {}

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
