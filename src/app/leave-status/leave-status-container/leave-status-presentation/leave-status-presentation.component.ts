import { Component, Input } from '@angular/core';
// ------------------------------------------------------------------ //
import { leaveStatus } from 'src/app/shared/leave-status';
import { LeaveDetails } from 'src/app/dashboard/models/dashboard.models';

@Component({
  selector: 'app-leave-status-presentation',
  templateUrl: './leave-status-presentation.component.html',
})
export class LeaveStatusPresentationComponent {

  @Input() public pageTitle: string;

  @Input() public set leaveData(value: LeaveDetails[] | null) {
    if (value) {
      this._leaveData = value;
    }
  }

  public leaveStatus = leaveStatus;

  public get leaveData(): LeaveDetails[] {
    return this._leaveData;
  }

  private _leaveData!: LeaveDetails[];

  constructor() {
    this.pageTitle = '';
  }

  public mapButton(status: string) {
    return (status === 'Accepted') ? 'Req. To Revoke' : 'Revoke';
  }

  public isRevokeButtonDisabled(status: string): boolean {
    return !(status === 'Accepted' || status === 'Pending');
  }
}
