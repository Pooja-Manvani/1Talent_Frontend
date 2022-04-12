import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ----------------------------------------------------------------------------------------
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeaveDetails } from '../models/dashboard.models';

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
  getInternDashboard(userName: string): Observable<LeaveDetails[]> {
    if (userName) {
      return this.http.get<LeaveDetails[]>(`${this.apiLink}/api/DashBoardLeaveStatus/${userName}`);
    } else {
      console.log('Gives null');
      return new Observable();
    }
  }
}
