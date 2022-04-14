/**
 * @author Hrishikesh Patel
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { LeaveGrant } from 'src/app/shared/models/leave-grants.model';
import { environment } from 'src/environments/environment';
import { LeaveApplication } from '../models/leave-status.models';

// -------------------------------------------------------------------------


@Injectable({
  providedIn: 'root'
})
export class LeaveStatusService {

  apiLink: string;

  constructor(private _http: HttpClient) {
    this.apiLink = environment.baseUrl;
  }

  /**
   * @name getLeaveStatus
   * @description API to get Leave status of interns
   * @param userName
   * @returns Observable()
   */
  public getLeaveStatus(userName: string, userRole: string): Observable<LeaveApplication[]> {
    return this._http.get<LeaveApplication[]>(`${this.apiLink}/api/${userRole === 'Mentor' ? 'MentorLeaveRequest' : 'InternLeaveStatus'}/${userName}`);
  }

  /**
   * @name leaveGrant
   * @description Send application grant data to api.
   * @param leaveGrantData
   * @returns Observable()
   */
  public leaveGrant(leaveGrantData: LeaveGrant): Observable<string> {
    return this._http.post<string>(`${this.apiLink}/api/MentorLeaveRequest`, leaveGrantData);
  }

  public getApplicationById(id: number): Observable<LeaveApplication> {
    return this._http.get<LeaveApplication>(`${this.apiLink}/api/ViewLeaveRequest/${id}`);
  }

  /**
   * @name revokeLeaveRequest
   * @description API to post revoke leave request of interns.
   * @param data
   * @returns Observable()
   */
  // Post call for Revoke Leave Request
  public revokeLeaveRequest(data: LeaveGrant): Observable<LeaveGrant> {
    return this._http.post<LeaveGrant>(`${this.apiLink}/api/InternLeaveStatus`, data);
  }
}
