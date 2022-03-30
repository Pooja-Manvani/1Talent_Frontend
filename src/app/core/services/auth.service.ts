import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   apiLink: string = environment.apiLink;

  constructor(private http: HttpClient) {
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token: string) {
    return localStorage.setItem("token", token);
  }

  login(creds: {userName: string, password: string}) {
    console.log(creds);
    return this.http.post<any>(`${this.apiLink}/api/Login/AuthenticateUser`, creds);
  }
}
