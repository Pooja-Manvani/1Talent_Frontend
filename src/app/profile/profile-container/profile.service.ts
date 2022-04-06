import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiLink: string = environment.apiLink;

  constructor(private http:HttpClient) { }

  public getbyid(userName:string):Observable<Profile>{
    return this.http.get<Profile>(`${this.apiLink}/api/InternProfile/${userName}`);
  }
}
