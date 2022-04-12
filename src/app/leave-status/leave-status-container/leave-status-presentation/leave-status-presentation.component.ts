import { Component, Input, OnInit } from '@angular/core';
// ------------------------------------------------------------------
import { LeaveApplication } from '../../models/leave-status.models';
import { leaveStatus } from 'src/app/shared/leave-status';

@Component({
  selector: 'app-leave-status-presentation',
  templateUrl: './leave-status-presentation.component.html',
})
export class LeaveStatusPresentationComponent implements OnInit {
  @Input() public set internLeaveApplication(leaveStatus: LeaveApplication[] | null) {
    if (leaveStatus) {
      this._internLeaveApplication = leaveStatus;
    }
  }
  public leaveStatus = leaveStatus;
  public get internLeaveApplication(): LeaveApplication[] {
    return this._internLeaveApplication;
  }
  private _internLeaveApplication!: LeaveApplication[];
  constructor() {}

  ngOnInit(): void {}
}
