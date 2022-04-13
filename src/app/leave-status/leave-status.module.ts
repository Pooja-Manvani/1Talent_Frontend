/**
 * @author Sushil Hariakar
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveStatusRoutingModule } from './leave-status-routing.module';
import { LeaveStatusContainerComponent } from './leave-status-container/leave-status-container.component';
import { LeaveStatusPresentationComponent } from './leave-status-container/leave-status-presentation/leave-status-presentation.component';
import { LeaveStatusService } from './services/leave-status.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LeaveStatusContainerComponent,
    LeaveStatusPresentationComponent
  ],
  imports: [
    CommonModule,
    LeaveStatusRoutingModule,
    SharedModule
  ],
  providers: [
    LeaveStatusService
  ]
})
export class LeaveStatusModule { }
