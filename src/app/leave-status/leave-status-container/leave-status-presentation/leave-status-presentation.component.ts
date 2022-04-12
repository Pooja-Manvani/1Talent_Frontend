import { Component, Input } from '@angular/core';
// ------------------------------------------------------------------
import { LeaveApplication } from '../../models/leave-status.models';
import { leaveStatus } from 'src/app/shared/leave-status';
import { LeaveDetails } from 'src/app/dashboard/models/dashboard.models';

@Component({
  selector: 'app-leave-status-presentation',
  templateUrl: './leave-status-presentation.component.html',
})
export class LeaveStatusPresentationComponent {
  
  
  @Input() public set leaveData(value: LeaveDetails[] | null) {
    if (value) {
      this._leaveData = value;
    }
  }
  public leaveStatus = leaveStatus;
  public pageTitle: string;
  public get leaveData(): LeaveDetails[] {
    return this._leaveData;
  }
  private _leaveData!: LeaveDetails[];

  constructor() {
    this.pageTitle = localStorage.getItem('userRole') === 'Intern' ? 'Status' : 'Request';
  }

  public mapButton(status: string) {
    if (status === 'Accepted') {
      // this.isRevokeButtonDisabled = false;
      return 'Req. To Revoke';
    } else {
      // this.isRevokeButtonDisabled = status !== 'Pending';
      return 'Revoke';
    }
  }

  
  public isRevokeButtonDisabled(status: string) : boolean {
    if (status === 'Accepted' || status === 'Pending') {
      return false;
    } else {
      return true;
    }
  }
}
