import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ----------------------------------------------------------------------------------------
import { Observable } from 'rxjs';
import { LeaveApplication } from 'src/app/leave-status/models/leave-status.models';
import { INTERN_DASHBOARD, MENTOR_DASHBOARD } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';

@Injectable()
export class DashboardService {
  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseUrl + '/api/';
  }
  /**
   * @description API to get leave details of interns
   * @param userName 
   * @returns Observable()
   */
  getInternDashboard(userName: string, userRole: string): Observable<LeaveApplication[]> {
    return this.http.get<LeaveApplication[]>(`${this.apiLink}${userRole === 'Mentor' ? MENTOR_DASHBOARD : INTERN_DASHBOARD}/${userName}`);
  }
}
