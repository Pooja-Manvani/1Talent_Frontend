import { Component, OnInit } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { ApplyLeavePresenterService } from '../apply-leave-presenter/apply-leave-presenter.service';

@Component({
  viewProviders: [ApplyLeavePresenterService],
  selector: 'app-apply-leave-presentation',
  templateUrl: './apply-leave-presentation.component.html',
})
export class ApplyLeavePresentationComponent implements OnInit {
  selectedDateRange!: DateRange<Date>;
  currentDate: Date;
  noOfDays: number;

  constructor(private _applyLeavePresenter: ApplyLeavePresenterService) {
    this.currentDate = new Date();
    this.noOfDays = 0;
  }

  ngOnInit(): void {
  }

  onDateRangeChange(date: Date) {
    this.selectedDateRange = this._applyLeavePresenter.onSelectedChange(date, this.selectedDateRange);
    let end = this.selectedDateRange.end?.getTime() ?? 0;
    let start = this.selectedDateRange.start?.getTime() ?? 0;
    this.noOfDays = this._applyLeavePresenter.leaveCount(start, end);
  }
}
