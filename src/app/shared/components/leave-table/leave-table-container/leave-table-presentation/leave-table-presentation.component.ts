/**
 * @author Hrishikesh Patel
 */

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeaveApplication } from 'src/app/leave-status/models/leave-status.models';
import { LeaveStatusService } from 'src/app/shared/services/leave-status.service';
import { leaveStatus } from 'src/app/shared/leave-status';
import { LeaveGrant } from 'src/app/shared/models/leave-grants.model';
import { LeaveTablePresenterService } from '../leave-table-presenter/leave-table-presenter.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-leave-table-presentation',
  templateUrl: './leave-table-presentation.component.html',
  viewProviders: [LeaveTablePresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaveTablePresentationComponent implements OnInit {

  @Input() public set leavesList(value: LeaveApplication[] | null) {
    if (value) {
      this._leavesList = value;
    }
  }

  @Output() public buttonClick: EventEmitter<LeaveGrant>;
  @Output() public revokeLeaveRequest: EventEmitter<LeaveGrant>;

  public leaveStatus = leaveStatus;
  public userRole: string | null;

  public get leavesList(): LeaveApplication[] {
    return this._leavesList;
  }

  private _leavesList!: LeaveApplication[];

  constructor(
    private _leaveTablePresenterService: LeaveTablePresenterService,
    private _leaveStatusService: LeaveStatusService,
    private _loaderService: LoaderService,
  ) {
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
      this._loaderService.setLoader(true);
      this._leaveStatusService.getApplicationById(leaveData.applicationId).subscribe(res => {
        res.applicationStatus = leaveData.applicationStatus;
        res.applicationId = leaveData.applicationId;
        this._leaveTablePresenterService.viewRequest(res);
        this._loaderService.setLoader(false);
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
