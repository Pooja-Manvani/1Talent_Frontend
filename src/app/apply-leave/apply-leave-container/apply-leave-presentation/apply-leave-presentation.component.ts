import { Component } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { ApplyLeavePresenterService } from '../apply-leave-presenter/apply-leave-presenter.service';

@Component({
  viewProviders: [ApplyLeavePresenterService],
  selector: 'app-apply-leave-presentation',
  templateUrl: './apply-leave-presentation.component.html',
})
export class ApplyLeavePresentationComponent {
  selectedDateRange!: DateRange<Date>;
  currentDate: Date;
  noOfDays: number;

  constructor(private _applyLeavePresenter: ApplyLeavePresenterService) {
    this.currentDate = new Date();
    this.noOfDays = 0;
  }

  onDateRangeChange(date: Date | null) {
    if(date)
    {
      this.selectedDateRange = this._applyLeavePresenter.onSelectedChange(date, this.selectedDateRange);
      console.log(this.selectedDateRange);
      let end = this.selectedDateRange.end?.getDate() ?? 0;
      let start = this.selectedDateRange.start?.getDate() ?? 0;
      this.noOfDays = this._applyLeavePresenter.leaveCount(start, end);
      console.log(this.noOfDays);
   }
  }

  weekendFilter = (date: Date): boolean => {
    const day = date.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
}

