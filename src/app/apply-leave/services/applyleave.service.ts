import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { APPLICATION_TYPE_MAP, APPLY_LEAVE } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { ApplicationType, ApplyLeave } from '../models/leave.model';

@Injectable()
export class ApplyleaveService {

  public apiLink: string;

  constructor(private _http: HttpClient) {
    this.apiLink = environment.baseUrl + '/api/';
  }

  // Post call for Leave Request
  public postLeaveRequest(data: ApplyLeave, userName: string): Observable<ApplyLeave> {
    data.userName = userName;
    return this._http.post<ApplyLeave>(`${this.apiLink}${APPLY_LEAVE}`, data);
  }

  //get User
  public getApplicationTypeMap():Observable<ApplicationType[]>{
    return this._http.get<ApplicationType[]>(`${this.apiLink}${APPLICATION_TYPE_MAP}`)
  }
}
