import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ----------------------------------------------------------------------------------------
import { Observable } from 'rxjs';
import { LeaveApplication } from 'src/app/leave-status/models/leave-status.models';
import { environment } from 'src/environments/environment';

@Injectable()
export class DashboardService {
  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseUrl;
  }
/**
 * @description API to get leave details of interns
 * @param userName 
 * @returns Observable()
 */
  getInternDashboard(userName: string): Observable<LeaveApplication[]> {
    if (userName) {
      return this.http.get<LeaveApplication[]>(`${this.apiLink}/api/DashBoardLeaveStatus/${userName}`);
    } else {
      return new Observable();
    }
  }
}
