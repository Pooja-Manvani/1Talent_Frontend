import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaveTableComponent } from './components/leave-table/leave-table.component';
import { ViewLeaveRequestPresentationComponent } from './components/leave-table/view-leave-request/view-leave-request-presentation/view-leave-request-presentation.component';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    LeaveTableComponent,
    ViewLeaveRequestPresentationComponent
  ],
  imports: [
    CommonModule,
    OverlayModule    
  ],
  exports: [
    ReactiveFormsModule,
    LeaveTableComponent
  ]
})
export class SharedModule { }
