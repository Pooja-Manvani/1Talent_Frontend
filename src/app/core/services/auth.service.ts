import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiLink: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token: string) {
    return localStorage.setItem("token", token);
  }

  login(creds: {userName: string, password: string}) {
    return this.http.post<any>(`${this.apiLink}/api/Login/AuthenticateUser`, creds);
  }

  /**
   * @description sends HTTP request for resetting password
   * @param email 
   * @returns Observable<string>
   */
  public resetPassword(email: {email : string}): Observable<string> {
    return this.http.post<string>(`${this.apiLink}/api/ForgotPassword/ForgotPassword`, email);
  }
}
