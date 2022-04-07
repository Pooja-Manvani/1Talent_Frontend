import { Component, Input, OnInit } from '@angular/core';
import { LeaveDetails } from '../../models/dashboard.models';

@Component({
  selector: 'app-dashboard-presentation',
  templateUrl: './dashboard-presentation.component.html',
  styleUrls: ['./dashboard-presentation.component.scss']
})
export class DashboardPresentationComponent implements OnInit {

  private _internDashboard!: LeaveDetails[];
  public get internDashboard(): LeaveDetails[] {
    return this._internDashboard;
  }
  @Input() public set internDashboard(v: LeaveDetails[] | null) {
   
    if (v) {
      this._internDashboard = v;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
