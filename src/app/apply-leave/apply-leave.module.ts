import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { DefaultMatCalendarRangeStrategy, MatDatepickerModule, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { SharedModule } from '../shared/shared.module';
import { ApplyLeaveContainerComponent } from './apply-leave-container/apply-leave-container.component';
import { ApplyLeavePresentationComponent } from './apply-leave-container/apply-leave-presentation/apply-leave-presentation.component';
import { ApplyLeaveRoutingModule } from './apply-leave-routing.module';
import { ApplyleaveService } from './services/applyleave.service';
@NgModule({
  declarations: [
    ApplyLeaveContainerComponent,
    ApplyLeavePresentationComponent
  ],
  imports: [
    CommonModule,
    ApplyLeaveRoutingModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule
  ],
  providers: [
    ApplyleaveService,
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    }
  ]
})
export class ApplyLeaveModule { }
