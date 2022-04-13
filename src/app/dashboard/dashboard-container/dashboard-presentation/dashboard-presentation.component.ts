import { Component, Input } from '@angular/core';
import { LeaveApplication } from 'src/app/leave-status/models/leave-status.models';

@Component({
  selector: 'app-dashboard-presentation',
  templateUrl: './dashboard-presentation.component.html',
})
export class DashboardPresentationComponent {

  private _internLeaveData!: LeaveApplication[];
  public get internLeaveData(): LeaveApplication[] {
    return this._internLeaveData;
  }
  @Input() public set internLeaveData(value: LeaveApplication[] | null) {
    if (value) {
      this._internLeaveData = value;
    }
  }
}
