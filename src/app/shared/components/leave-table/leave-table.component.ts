/**
 * @author Hrishikesh Patel
 */

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeaveApplication } from 'src/app/leave-status/models/leave-status.models';
import { LeaveStatusService } from 'src/app/leave-status/services/leave-status.service';
import { leaveStatus } from 'src/app/shared/leave-status';
import { LeaveGrant } from '../../models/leave-grants.model';
import { LeaveTablePresenterService } from './leaveTablePresenter/leave-table-presenter.service';

@Component({
  selector: 'app-leave-table',
  templateUrl: './leave-table.component.html',
  viewProviders: [LeaveTablePresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaveTableComponent implements OnInit {

  @Input() public set leavesList(value: LeaveApplication[]) {
    this._leavesList = value;
  }

  @Output() buttonClick: EventEmitter<LeaveGrant>;
  @Output() revokeLeaveRequest: EventEmitter<LeaveGrant>;

  public leaveStatus = leaveStatus;
  public userRole: string | null;

  public get leavesList(): LeaveApplication[] {
    return this._leavesList;
  }

  private _leavesList!: LeaveApplication[];

  constructor(private _leaveTablePresenterService: LeaveTablePresenterService, private _leaveStatusService: LeaveStatusService) {
    this.userRole = localStorage.getItem('userRole');
    this.buttonClick = new EventEmitter();
    this.revokeLeaveRequest = new EventEmitter();
  }

  ngOnInit(): void {
    this._leaveTablePresenterService.buttonClick$.subscribe((leaveGrant: LeaveGrant) => {
      this.buttonClick.emit(leaveGrant);
    });

    this._leaveTablePresenterService.leaveRevokeData$.subscribe(res=>{
      this.revokeLeaveRequest.emit(res);
    });
  }

  /**
   * @name mapButton
   * @description This function maps the button name based on the application status.
   * @param status
   * @returns string
   */
  public mapButton(status: string): string {
    return status === 'Accepted' ? 'Req. To Revoke' : 'Revoke';
  }

  /**
   * @name isRevokeButtonDisabled
   * @description This function either disables or enables the button based on the application status.
   * @param status 
   * @returns boolean
   */
  public isRevokeButtonDisabled(status: string): boolean {
    return !(status === 'Accepted' || status === 'Pending');
  }

  /**
   * @author Jigar Bhanushali
   * @name showOverlay
   * @description Displays the application details overlay if the userRole is 'Mentor'.
   * @param leaveData optional
   */
  public showOverlay(leaveData?: LeaveApplication) {
    if (this.userRole === 'Mentor' && leaveData) {
      this._leaveStatusService.getApplicationById(leaveData.applicationId).subscribe(res => {
        res.applicationStatus = leaveData.applicationStatus;
        res.applicationId = leaveData.applicationId;
        this._leaveTablePresenterService.viewRequest(res);
      });
    } 
  }
  
  /**
   * @author Himani Barot
   * @name showConfirmationPopup
   * @description Open confirmation popup to revoke leave request.
   */
  public showConfirmationPopup(data: LeaveApplication) {
    this._leaveTablePresenterService.displayConfirmationPopup(data, true);
  }
}
