/**
 * @author Jigar Bhanushali, Hrishikesh Patel
 */

import { Component, EventEmitter, Input } from '@angular/core';
import { LeaveApplication } from 'src/app/leave-status/models/leave-status.models';
import { leaveStatus } from 'src/app/shared/leave-status';
import { LeaveGrant } from 'src/app/shared/models/leave-grants.model';

@Component({
  selector: 'app-view-leave-request-presentation',
  templateUrl: './view-leave-request-presentation.component.html',
  styleUrls: ['./view-leave-request-presentation.component.scss']
})
export class ViewLeaveRequestPresentationComponent {

  buttonClickEvent: EventEmitter<LeaveGrant>;
  close: EventEmitter<string>;

  private _requestData!: LeaveApplication;
  public get requestData(): LeaveApplication {
    return this._requestData;
  }
  @Input() public set requestData(value: LeaveApplication | null) {
    if (value) {
      this._requestData = value;
    }
  }

  leaveStatus: string[];

  constructor() {
    this.buttonClickEvent = new EventEmitter();
    this.close = new EventEmitter();
    this.leaveStatus = leaveStatus;
    
  }

  /**
   * @name buttonClick
   * @description Emits grant details on button click
   * @param value
   */
  public buttonClick(value: string): void {
    this.buttonClickEvent.emit({
      button: value,
      applicationId: this.requestData.applicationId,
      userName: this.requestData.internUserName ?? '',
      applicationStatus: this.requestData.applicationStatus,
    });
  }

  /**
   * @name buttonStatus
   * @description Conditionally disable or enable buttons
   * @param buttonName 
   * @returns boolean
   */
  public buttonStatus(buttonName: string): boolean {
    return buttonName === 'Revoke'
      ? leaveStatus[this.requestData.applicationStatus - 1] !== 'Req. Revoke'   
      : leaveStatus[this.requestData.applicationStatus - 1] !== 'Pending';
  }

  onClose() {
    this.close.emit();
  }
}

