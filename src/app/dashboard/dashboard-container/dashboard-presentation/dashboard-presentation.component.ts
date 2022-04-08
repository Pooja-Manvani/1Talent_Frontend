import { Component, Input } from '@angular/core';

import { LeaveDetails } from '../../models/dashboard.models';

@Component({
  selector: 'app-dashboard-presentation',
  templateUrl: './dashboard-presentation.component.html',
})
export class DashboardPresentationComponent {

  private _internDashboard!: LeaveDetails[];
  public get internDashboard(): LeaveDetails[] {
    return this._internDashboard;
  }
  @Input() public set internDashboard(value: LeaveDetails[] | null) {
    if (value) {
      this._internDashboard = value;
    }
  }
}
