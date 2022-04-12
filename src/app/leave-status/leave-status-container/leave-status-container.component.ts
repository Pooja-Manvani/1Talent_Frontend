import { Component, OnInit } from '@angular/core';

// ---------------------------------------------------------------------
import { Observable } from 'rxjs/internal/Observable';
import { LeaveApplication } from '../models/leave-status.models';
import { LeaveStatusService } from '../services/leave-status.service';



@Component({
  selector: 'app-leave-status-container',
  templateUrl: './leave-status-container.component.html'
})
export class LeaveStatusContainerComponent implements OnInit {

  internLeaveStatus$ : Observable<LeaveApplication[]>;
  private _userName : string; 

  

  constructor(private _leaveStatusService : LeaveStatusService ) {
    this.internLeaveStatus$ = new Observable();
    this._userName = localStorage.getItem('userName') ?? ''
  }

  ngOnInit(): void {
    this.internLeaveStatus$ = this._leaveStatusService.getLeaveStatus(this._userName);
  }

}
