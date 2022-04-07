import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { DefaultMatCalendarRangeStrategy, MatDatepickerModule, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';

import { ApplyLeaveRoutingModule } from './apply-leave-routing.module';
import { ApplyLeaveContainerComponent } from './apply-leave-container/apply-leave-container.component';
import { ApplyLeavePresentationComponent } from './apply-leave-container/apply-leave-presentation/apply-leave-presentation.component';


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
  ],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    }
  ]
})
export class ApplyLeaveModule { }
