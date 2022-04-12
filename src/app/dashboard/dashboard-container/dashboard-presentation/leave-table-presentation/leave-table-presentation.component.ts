import { Component, Input } from '@angular/core';
import { LeaveDetails } from 'src/app/dashboard/models/dashboard.models';
import { leaveStatus } from 'src/app/shared/leave-status';

@Component({
  selector: 'app-leave-table-presentation',
  templateUrl: './leave-table-presentation.component.html',
})
export class LeaveTablePresentationComponent {

  public leaveStatus = leaveStatus;
  public isRevokeButtonDisabled = false;
  private _leaveData!: LeaveDetails[];
  public get leaveData(): LeaveDetails[] {
    return this._leaveData;
  }
  @Input() public set leaveData(value: LeaveDetails[]) {
    if (value) {
      this._leaveData = value;
    }
  }

  mapButton(status: string) {
    if (status === 'Accepted') {
      this.isRevokeButtonDisabled = false;
      return 'Req. To Revoke';
    } else {
      this.isRevokeButtonDisabled = status !== 'Pending';
      return 'Revoke';
    }
  }

}
