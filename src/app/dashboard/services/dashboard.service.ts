import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LeaveDetails, InternAdapter } from '../models/dashboard.models';

@Injectable()
export class DashboardService {
  apiLink: string;

  constructor(private http: HttpClient, private internAdapter: InternAdapter) {
    this.apiLink = environment.baseUrl;
  }

  getInternDashboard(userName: string): Observable<LeaveDetails[]> {
    if (userName) {
      return this.http.get<LeaveDetails[]>(`${this.apiLink}/api/DashBoardLeaveStatus/${userName}`).pipe(
        map(interns => interns.map((intern: any) => this.internAdapter.adapt(intern))),
      );
    } else {
      alert("Bhai ni male");
      return new Observable();
    }
  }
}
