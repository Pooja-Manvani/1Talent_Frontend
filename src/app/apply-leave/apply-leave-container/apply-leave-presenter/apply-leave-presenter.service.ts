import { Injectable } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';

@Injectable({
  providedIn: 'root'
})
export class ApplyLeavePresenterService {

  constructor() { }

  public onSelectedChange(date: Date, selectedDateRange: DateRange<Date>): DateRange<Date> {
    if (
      selectedDateRange &&
      selectedDateRange.start &&
      date > selectedDateRange.start &&
      !selectedDateRange.end
    ) {
      selectedDateRange = new DateRange(
        selectedDateRange.start,
        date
      );
    } else {
      selectedDateRange = new DateRange(date, null);
    }
    return selectedDateRange;
  }

  public leaveCount(start: number, end: number): number {
    return end ? ((end - start) + 1) : (start ? 1 : 0);
  }
}
