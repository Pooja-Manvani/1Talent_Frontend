/**
 * @author Sushil Hariakar
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveStatusRoutingModule } from './leave-status-routing.module';
import { LeaveStatusContainerComponent } from './leave-status-container/leave-status-container.component';
import { LeaveStatusPresentationComponent } from './leave-status-container/leave-status-presentation/leave-status-presentation.component';
import { LeaveStatusService } from './services/leave-status.service';


@NgModule({
  declarations: [
    LeaveStatusContainerComponent,
    LeaveStatusPresentationComponent
  ],
  imports: [
    CommonModule,
    LeaveStatusRoutingModule
  ],
  providers: [
    LeaveStatusService
  ] 
})
export class LeaveStatusModule { }
