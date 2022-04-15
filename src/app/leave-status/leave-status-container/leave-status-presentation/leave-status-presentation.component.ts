import { Component, EventEmitter, Input, Output } from '@angular/core';

// ------------------------------------------------------------------ //
import { leaveStatus } from 'src/app/shared/leave-status';
import { LeaveGrant } from 'src/app/shared/models/leave-grants.model';
import { LeaveApplication } from '../../models/leave-status.models';

@Component({
  selector: 'app-leave-status-presentation',
  templateUrl: './leave-status-presentation.component.html',
})
export class LeaveStatusPresentationComponent {

  @Input() public pageTitle: string;

  @Input() public set leaveData(value: LeaveApplication[] | null) {
    if (value) {
      this._leaveData = value;
    }
  }

  @Output() public leaveGrant: EventEmitter<LeaveGrant>;
  @Output() public revokeLeaveRequestData: EventEmitter<LeaveGrant>;

  public leaveStatus = leaveStatus;

  public get leaveData(): LeaveApplication[] {
    return this._leaveData;
  }

  private _leaveData!: LeaveApplication[];

  constructor() {
    this.pageTitle = '';
    this.leaveGrant = new EventEmitter();
    this.revokeLeaveRequestData = new EventEmitter();
  }

  public mapButton(status: string) {
    return (status === 'Accepted') ? 'Req. To Revoke' : 'Revoke';
  }

  public isRevokeButtonDisabled(status: string): boolean {
    return !(status === 'Accepted' || status === 'Pending');
  }

  // /**
  //  * @author Jigar Bhanushali
  //  * @description This function emits the leave grant.
  //  * @param leaveGrant 
  //  */
  // public onButtonClick(leaveGrant: LeaveGrant) {
  //   this.leaveGrant.emit(leaveGrant);
  // }

  // /**
  //  * @author Himani Barot
  //  * @description This function emits the revoked leave request data.
  //  * @param data 
  //  */
  // public revokeLeaveRequest(data: LeaveGrant) {
  //   this.revokeLeaveRequestData.emit(data);
  // }
}
