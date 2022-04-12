/**
 * @author Hrishikesh Patel
 */

import { Component, Input } from '@angular/core';
import { LeaveDetails } from 'src/app/dashboard/models/dashboard.models';
import { leaveStatus } from 'src/app/shared/leave-status';

@Component({
  selector: 'app-leave-table',
  templateUrl: './leave-table.component.html',
})
export class LeaveTableComponent {
  public leaveStatus = leaveStatus;

  public userRole: string | null;

  private _leavesList!: LeaveDetails[];
  public get leavesList(): LeaveDetails[] {
    return this._leavesList;
  }
  @Input() public set leavesList(value: LeaveDetails[]) {
    this._leavesList = value;
  }

  constructor() {
    this.userRole = localStorage.getItem('userRole');
  }

  public mapButton(status: string) {
    return status === 'Accepted' ? 'Req. To Revoke' : 'Revoke';
  }

  public isRevokeButtonDisabled(status: string): boolean {
    return !(status === 'Accepted' || status === 'Pending');
  }

  public showOverlay() {
    if (this.userRole === 'Mentor') {
      //TODO: show overlay
    }
  }
}
