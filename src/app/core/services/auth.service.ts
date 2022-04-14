import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ------------------------------------------------------------------------ //
import { Observable } from 'rxjs/internal/Observable';
import { AUTHENTICATE_USER, CHANGE_PASSWORD, CHECK_AUTHENTICATION, FORGOT_PASSWORD } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { ChangePassword } from '../models/change-password.model';
import { LoginCredentials, LoginResponse } from '../models/login.model';

@Injectable()
export class AuthService {
  /**
   * @name keysToRemove
   * @description keys to remove from local storage
   */
  private keysToRemove: Array<string> = ["token", "userName", "userRole"];

  /**
   * @name apiLink
   * @description  api base url from environment file
   */
  public apiLink: string;
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseUrl + '/api/';
  }

  /**
   * @name getToken
   * @description gets token from localStorage  
   * @return string | null
   */
  public getToken(): string | null {
    return localStorage.getItem("token");
  }

  /**
   * @name setToken
   * @description sets token to localStorage
   * @return void
   */
  public setToken(token: string): void {
    return localStorage.setItem("token", token);
  }

  /**
   * @name clearLocalStorage
   * @description remove token from localStorage
   * @return void
   */
  public clearLocalStorage(): void {
    this.keysToRemove.forEach(key =>
      localStorage.removeItem(key)
    )
  }

  /**
   * @name getUserName
   * @description get userName from localStorage
   * @return string | null
   */
  public getUserName(): string | null {
    return localStorage.getItem("userName");
  }

  /**
   * @name setUserName
   * @description set userName to localStorage
   * @return void
   */
  public setUserName(userName: string) {
    localStorage.setItem("userName", userName);
  }

  /**
   * @name getUserRole
   * @description get userRole to localStorage
   * @return string | null
   */
  public getUserRole(): string | null {
    return localStorage.getItem("userRole");
  }

  /**
   * @name setUserRole
   * @description set userRole to localStorage
   * @return void
   */
  public setUserRole(userRole: string): void {
    localStorage.setItem("userRole", userRole);
  }

  /**
   * @name login
   * @description post login details 
   * @return Observable<LoginResponse>
   */
  public login(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiLink}${AUTHENTICATE_USER}`, credentials);
  }

  /**
   * @name checkAuthentication
   * @description check authentication
   * @return Observable<boolean>
   */
  public checkAuthentication(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiLink}${CHECK_AUTHENTICATION}`);
  }

  /**
   * @name resetPassword
   * @description sends HTTP request for resetting password
   * @param email 
   * @returns Observable<string>
   */
  public resetPassword(email: { email: string }): Observable<string> {
    return this.http.post<string>(`${this.apiLink}${FORGOT_PASSWORD}`, email);
  }
  /**
   * @description sends HTTP POST request for resetting password
   * @param changePassword 
   * @returns Observable<string>
   */
  public changePassword(changePassword: ChangePassword): Observable<ChangePassword> {
    return this.http.post<ChangePassword>(`${this.apiLink}${CHANGE_PASSWORD}`, changePassword);
  }
}
