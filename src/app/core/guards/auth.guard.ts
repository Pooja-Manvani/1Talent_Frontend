/**
 * @author Jigar Bhanushali, Himani Barot
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  userRole:string
  constructor(private _authService: AuthService) { 
    this.userRole = localStorage.getItem('userRole') ?? ''

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return (this.userRole === 'Intern') ? true : false
  }

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
    if (this._authService.getToken()) {
      this._authService.checkAuthentication().subscribe((status) => {
        authStatus.next(status);
      })
    } else {
      authStatus.next(false);
    }
    return authStatus$;
  }
}
