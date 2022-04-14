import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ApplicationType, ApplyLeave } from '../models/leave.model';

@Injectable()
export class ApplyleaveService {

  public apiLink: string;

  constructor(private _http: HttpClient) {
    this.apiLink = environment.baseUrl;
  }

  // Post call for Leave Request
  public postLeaveRequest(data: ApplyLeave, userName: string): Observable<ApplyLeave> {
    return this._http.post<ApplyLeave>(`${this.apiLink}/api/ApplyLeave/${userName}`, data);
  }

  //get User
  public getApplicationTypeid():Observable<ApplicationType[]>{
    return this._http.get<ApplicationType[]>(`${this.apiLink}/api/ApplicationType`)
  }
}
