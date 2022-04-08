import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveDetails } from '../models/dashboard.models';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html'
})
export class DashboardContainerComponent implements OnInit {
  internDashboard$: Observable<LeaveDetails[]>;

  constructor(private _dashboardService: DashboardService) {
    this.internDashboard$ = new Observable();
  }

  ngOnInit(): void {
    // this.internDashboard$ = this._dashboardService.getInternDashboard(localStorage.getItem('username'));
    this.internDashboard$ = this._dashboardService.getInternDashboard("Jenica@123");
  }
}
