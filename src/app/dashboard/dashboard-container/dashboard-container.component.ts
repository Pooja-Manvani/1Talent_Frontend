import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LeaveApplication } from 'src/app/leave-status/models/leave-status.models';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html'
})
export class DashboardContainerComponent implements OnInit {
  internDashboard$: Observable<LeaveApplication[]>;

  constructor(private _dashboardService: DashboardService) {
    this.internDashboard$ = new Observable();
  }

  /**
   * @description gets current Username from local storage
   */
  ngOnInit(): void {
    this.internDashboard$ = this._dashboardService.getInternDashboard(localStorage.getItem('userName') ?? '', localStorage.getItem('userRole') ?? '');
  }
}
