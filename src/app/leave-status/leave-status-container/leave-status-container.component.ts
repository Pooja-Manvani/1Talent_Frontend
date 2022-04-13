import { Component, OnInit } from '@angular/core';

// --------------------------------------------------------------------- //
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
  private _userRole : string; 

  public pageTitle: string;

  constructor(private _leaveStatusService : LeaveStatusService ) {
    this.internLeaveStatus$ = new Observable();
    this._userName = localStorage.getItem('userName') ?? ''
    this._userRole = localStorage.getItem('userRole') ?? ''
    this.pageTitle = 'Leave ' + (localStorage.getItem('userRole') === 'Intern' ? 'Status' : 'Request');
  }

  ngOnInit(): void {
    this.internLeaveStatus$ = this._leaveStatusService.getLeaveStatus(this._userName, this._userRole + this.pageTitle);
  }
}
