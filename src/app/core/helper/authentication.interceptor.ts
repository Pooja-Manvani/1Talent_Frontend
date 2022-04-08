import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

// -------------------------------------------------------------------------------------------------- //
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private tokenservice: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<string>> {
    const tokenReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.tokenservice.getToken()}`
      }
    });
    return next.handle(tokenReq);
  }
}
