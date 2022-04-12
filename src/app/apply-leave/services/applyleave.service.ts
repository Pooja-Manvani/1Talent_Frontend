import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApplicationType, ApplyLeave } from '../models/leave.model';

@Injectable({
  providedIn: 'root'
})
export class ApplyleaveService {

  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseUrl;
  }

  // Post call for Leave Request
  public postLeaveRequest(data: ApplyLeave, userName: string): Observable<ApplyLeave> {
    return this.http.post<ApplyLeave>(`${this.apiLink}/api/ApplyLeave/${userName}`, data);
  }

  //get User
  public getApplicationTypeid():Observable<ApplicationType[]>{
    return this.http.get<ApplicationType[]>(`${this.apiLink}/api/ApplicationType`)
  }

  


}
