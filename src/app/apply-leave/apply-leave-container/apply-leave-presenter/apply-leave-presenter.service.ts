import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';

@Injectable({
  providedIn: 'root'
})
export class ApplyLeavePresenterService {

  constructor(private fb:FormBuilder) { }

  public onSelectedChange(date: Date, selectedDateRange: DateRange<Date> ): DateRange<Date> {
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
    let day = start;
    let count = 0;
    if (start) count++;
    //count day without weekends
    while (day < end) {
      day = this.incrementDay(day, 1);
      const currentDay = new Date(day).getDay();
      if (currentDay !== 0 && currentDay !== 6) {
        count++;
      }
    }
    //get all leave days
    return count;
  }
  //get total days
  public incrementDay(current: number, noOfDays: number) {
    return current + (noOfDays * (24 * 60 * 60 * 1000));
  }

  //create form
  public buildForm(){
    return this.fb.group({
      leaveType:[''],
      days:[''],
      description:['']
    })
  }
}
