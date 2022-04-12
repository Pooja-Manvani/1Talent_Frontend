import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    /**
     * @description Checks wheather the user is authorized or not
     * @returns Observable<boolean>
     */
    let authStatus = new Subject<boolean>();
    let authStatus$ = authStatus.asObservable();
    this._authService.checkAuthentication().subscribe((status) => {
      authStatus.next(status);
    })
    return authStatus$;
  }
}
