import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ------------------------------------------------------------------------ //
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { LoginCredentials, LoginResponse } from '../models/login.model';

@Injectable()
export class AuthService {
  // Api Base Url from environment file.
  public apiLink: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // gets token from localStorage
  public getToken(): string | null {
    return localStorage.getItem("token");
  }

  // saves token to localStorage
  public setToken(token: string) {
    return localStorage.setItem("token", token);
  }
  
  // get userName from localStorage
  public getUserName(): string | null {
    return localStorage.getItem("userName");
  }
  
  // save userName to localStorage
  public setUserName(userName: string) {
    localStorage.setItem("userName", userName);
  }
  
  public getUserRole(): string | null {
    return localStorage.getItem("userRole");
  }

  public setUserRole(userRole: string): void {
    localStorage.setItem("userRole", userRole);
  }

  public login(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiLink}/api/Login/AuthenticateUser`, credentials);
  }

  public checkAuthentication() {
    return this.http.get<boolean>(`${this.apiLink}/api/Login/GetResult`);
  }

  /**
   * @description sends HTTP POST request for resetting password
   * @param email 
   * @returns Observable<string>
   */
  public resetPassword(email: {email : string}): Observable<string> {
    return this.http.post<string>(`${this.apiLink}/api/ForgotPassword/ForgotPassword`, email);
  }
  /**
   * @description sends HTTP PUT request for resetting password
   * @param changePassword 
   * @returns Observable<string>
   */
  public changePassword(changePassword: {changePassword : string}): Observable<string> {
    return this.http.put<string>(`${this.apiLink}/api/ForgotPassword/change
    Password`, changePassword);
  }
}
