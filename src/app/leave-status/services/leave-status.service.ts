/**
 * @author Hrishikesh Patel
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LeaveGrant } from 'src/app/shared/models/leave-grants.model';
import { environment } from 'src/environments/environment';
import { LeaveApplication } from '../models/leave-status.models';

// -------------------------------------------------------------------------


@Injectable()
export class LeaveStatusService {

  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseUrl;
  }

  /**
   * @name getLeaveStatus
   * @description API to get Leave status of interns
   * @param userName
   * @returns Observable()
   */
  public getLeaveStatus(userName: string, userRole: string): Observable<LeaveApplication[]> {
    return this.http.get<LeaveApplication[]>(`${this.apiLink}/api/${userRole.replace(' ', '')}/${userName}`);
  }

  /**
   * @name leaveGrant
   * @description Send application grant data to api.
   * @param leaveGrantData
   * @returns Observable()
   */
  public leaveGrant(leaveGrantData: LeaveGrant): Observable<string> {
    return this.http.post<string>(`${this.apiLink}/api/MentorLeaveRequest`, leaveGrantData)
  }
}
