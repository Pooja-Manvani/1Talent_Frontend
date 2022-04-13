import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeaveApplication } from '../models/leave-status.models';

// -------------------------------------------------------------------------


@Injectable()
export class LeaveStatusService {
  
  apiLink : string;

  constructor(private http: HttpClient) { 
    this.apiLink = environment.baseUrl;
  }

  /**
   * @description API to get Leave status of interns
   * @param userName
   * @returns Observable()
   */
  public getLeaveStatus(userName: string, userRole: string): Observable<LeaveApplication[]>{
    return this.http.get<LeaveApplication[]>(`${this.apiLink}/api/${userRole.replace(' ', '')}/${userName}`)
  }
}
