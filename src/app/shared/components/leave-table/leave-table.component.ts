/**
 * @author Hrishikesh Patel
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeaveApplication } from 'src/app/leave-status/models/leave-status.models';
import { leaveStatus } from 'src/app/shared/leave-status';
import { LeaveGrant } from '../../models/leave-grants.model';
import { LeaveTablePresenterService } from './leaveTablePresenter/leave-table-presenter.service';

@Component({
  selector: 'app-leave-table',
  templateUrl: './leave-table.component.html',
  viewProviders: [LeaveTablePresenterService]
})
export class LeaveTableComponent implements OnInit {
  @Input() public set leavesList(value: LeaveApplication[]) {
    this._leavesList = value;
  }

  @Output() buttonClick: EventEmitter<LeaveGrant>;

  public leaveStatus = leaveStatus;
  public userRole: string | null;

  public get leavesList(): LeaveApplication[] {
    return this._leavesList;
  }

  private _leavesList!: LeaveApplication[];

  constructor(private _LeaveTablePresenterService: LeaveTablePresenterService) {
    this.userRole = localStorage.getItem('userRole');
    this.buttonClick = new EventEmitter();
  }

  ngOnInit(): void {
    this._LeaveTablePresenterService.buttonClick$.subscribe((leaveGrant: LeaveGrant) => {
      this.buttonClick.emit(leaveGrant);
    });
  }

  public mapButton(status: string) {
    return status === 'Accepted' ? 'Req. To Revoke' : 'Revoke';
  }

  public isRevokeButtonDisabled(status: string): boolean {
    return !(status === 'Accepted' || status === 'Pending');
  }

  public showOverlay(leaveData?: LeaveApplication) {
    if (this.userRole === 'Mentor' && leaveData) {
      this._LeaveTablePresenterService.viewRequest(leaveData);
    } else {
      this._LeaveTablePresenterService.displayConfirmation();
    }
  }
}
