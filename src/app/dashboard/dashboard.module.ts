import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardPresentationComponent } from './dashboard-container/dashboard-presentation/dashboard-presentation.component';
import { LeaveStatusPresentationComponent } from './dashboard-container/dashboard-presentation/leave-status-presentation/leave-status-presentation.component';
import { LeaveTablePresentationComponent } from './dashboard-container/dashboard-presentation/leave-table-presentation/leave-table-presentation.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContainerComponent,
    DashboardPresentationComponent,
    LeaveStatusPresentationComponent,
    LeaveTablePresentationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
