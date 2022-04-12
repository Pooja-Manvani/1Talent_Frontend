import { Component, Input } from '@angular/core';
// ------------------------------------------------------------------
import { LeaveApplication } from '../../models/leave-status.models';
import { leaveStatus } from 'src/app/shared/leave-status';

@Component({
  selector: 'app-leave-status-presentation',
  templateUrl: './leave-status-presentation.component.html',
})
export class LeaveStatusPresentationComponent {
  
  // set leave applications data
  @Input() public set internLeaveApplication(leaveStatus: LeaveApplication[] | null) {
    if (leaveStatus) {
      this._internLeaveApplication = leaveStatus;
    }
  }
  public leaveStatus = leaveStatus;

  // get leave applications data
  public get internLeaveApplication(): LeaveApplication[] {
    return this._internLeaveApplication;
  }
  private _internLeaveApplication!: LeaveApplication[];
}
