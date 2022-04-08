import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  forgotPassword(forgotPasswordCredentials: {email : string}) {
    return this.http.post<any>(`${this.apiLink}/api/ForgotPassword/ForgotPassword`, forgotPasswordCredentials);
  }
}
