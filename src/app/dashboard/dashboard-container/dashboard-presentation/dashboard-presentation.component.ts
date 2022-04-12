import { Component, Input } from '@angular/core';

import { LeaveDetails } from '../../models/dashboard.models';

@Component({
  selector: 'app-dashboard-presentation',
  templateUrl: './dashboard-presentation.component.html',
})
export class DashboardPresentationComponent {

  private _internLeaveData!: LeaveDetails[];
  public get internLeaveData(): LeaveDetails[] {
    return this._internLeaveData;
  }
  @Input() public set internLeaveData(value: LeaveDetails[] | null) {
    if (value) {
      this._internLeaveData = value;
    }
  }
}
