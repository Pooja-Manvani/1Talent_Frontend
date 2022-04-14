import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ---------------------------------------------------------------------------------------------
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardPresentationComponent } from './dashboard-container/dashboard-presentation/dashboard-presentation.component';
import { LeaveStatusPresentationComponent } from './dashboard-container/dashboard-presentation/leave-status-presentation/leave-status-presentation.component';
import { DashboardService } from './services/dashboard.service';
import { SharedModule } from '../shared/shared.module';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [
    DashboardContainerComponent,
    DashboardPresentationComponent,
    LeaveStatusPresentationComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    GoogleChartsModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
