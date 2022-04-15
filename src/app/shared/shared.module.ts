import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
//-------------------------------------------------------//

import { ViewLeaveRequestPresentationComponent } from './components/leave-table/view-leave-request/view-leave-request-presentation/view-leave-request-presentation.component';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { LeaveTableContainerComponent } from './components/leave-table/leave-table-container/leave-table-container.component';
import { LeaveTablePresentationComponent } from './components/leave-table/leave-table-container/leave-table-presentation/leave-table-presentation.component';



@NgModule({
  declarations: [
    LeaveTablePresentationComponent,
    ViewLeaveRequestPresentationComponent,
    ConfirmationPopupComponent,
    LeaveTableContainerComponent
  ],
  imports: [
    CommonModule,
    OverlayModule    
  ],
  exports: [
    ReactiveFormsModule,
    LeaveTableContainerComponent
  ]
})
export class SharedModule { }
