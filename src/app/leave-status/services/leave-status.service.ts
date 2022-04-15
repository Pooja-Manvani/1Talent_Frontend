/**
 * @author Hrishikesh Patel
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ------------------------------------------------------------------------- //
import { Observable } from 'rxjs/internal/Observable';
import { INTERN_DASHBOARD, INTERN_LEAVE_STATUS, MENTOR_DASHBOARD, MENTOR_LEAVE_REQUESTS, MENTOR_LEAVE_REQUEST_BY_ID } from 'src/app/shared/constants';
import { LeaveGrant } from 'src/app/shared/models/leave-grants.model';
import { environment } from 'src/environments/environment';
import { LeaveApplication } from '../models/leave-status.models';



@Injectable({
  providedIn: 'root'
})
export class LeaveStatusService {

  apiLink: string;

  constructor(private _http: HttpClient) {
    this.apiLink = environment.baseUrl + '/api/';
  }

  /**
   * @name getLeaveStatus
   * @description API to get Leave status of interns
   * @param userName
   * @returns Observable()
   */
  public getLeaveStatus(userName: string, userRole: string): Observable<LeaveApplication[]> {
    return this._http.get<LeaveApplication[]>(`${this.apiLink}${userRole === 'Mentor' ? MENTOR_LEAVE_REQUESTS : INTERN_LEAVE_STATUS}/${userName}`);
  }

  /**
   * @name leaveGrant
   * @description Send application grant data to api.
   * @param leaveGrantData
   * @returns Observable()
   */
  public leaveGrant(leaveGrantData: LeaveGrant): Observable<{"message":string}> {
    return this._http.post<{"message":string}>(`${this.apiLink}${MENTOR_LEAVE_REQUESTS}`, leaveGrantData);
  }

  public getApplicationById(id: number): Observable<LeaveApplication> {
    return this._http.get<LeaveApplication>(`${this.apiLink}${MENTOR_LEAVE_REQUEST_BY_ID}/${id}`);
  }

  /**
   * @name revokeLeaveRequest
   * @description API to post revoke leave request of interns.
   * @param data
   * @returns Observable()
   */
  // Post call for Revoke Leave Request
  public revokeLeaveRequest(data: LeaveGrant): Observable<LeaveGrant> {
    return this._http.post<LeaveGrant>(`${this.apiLink}${INTERN_LEAVE_STATUS}`, data);
  }

  /**
   * @description API to get leave details of interns
   * @param userName 
   * @returns Observable()
   */
   getDashboardData(userName: string, userRole: string): Observable<LeaveApplication[]> {
    return this._http.get<LeaveApplication[]>(`${this.apiLink}${userRole === 'Mentor' ? MENTOR_DASHBOARD : INTERN_DASHBOARD}/${userName}`);
  }
}
