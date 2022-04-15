import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

// ----------------------------------------------------------------------------------------------------- //
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { ApplyLeave } from '../../models/leave.model';

@Injectable()
export class ApplyLeavePresenterService {
  private leaveData: Subject<ApplyLeave>;
  public leaveData$: Observable<ApplyLeave>;

  constructor(private _fb: FormBuilder) {
    this.leaveData = new Subject<ApplyLeave>();
    this.leaveData$ = this.leaveData.asObservable();
  }

  /**
   * @name onSelectedChange
   * @description Select date range from start to end
   * @param date 
   * @param selectedDateRange 
   * @returns DateRange<Date>
   */
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

  /**
   * @name leaveCount
   * @description Counts leave by excluding weekends
   * @param start 
   * @param end 
   * @returns number
   */
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

  /**
   * @name buildForm
   * @description Creates apply leave form
   */
  public buildForm() {
    return this._fb.group({
      applicationTypeId: ['4'],
      description: ['', Validators.required],
    })
  }

  /**
   * @name onSubmit
   * @description Submit form
   * @param leavedata 
   * @param fromDate 
   * @param toDate 
   * @param activeTab 
   */
  public onSubmit(leavedata: ApplyLeave, fromDate: string | undefined, toDate: string | undefined, activeTab: number) {

    //set application status
    leavedata.applicationStatus = 3;
    //fromDate 
    if (fromDate) {
      leavedata.fromDate = this._formatDate(fromDate);
    }
    //toDate
    if (fromDate) {
      leavedata.toDate = this._formatDate(toDate ? toDate : fromDate);
    }
    //user select work from home
    leavedata.applicationTypeId = activeTab === 1 ? 1 : +leavedata.applicationTypeId;

    this.leaveData.next(leavedata);
  }

  // Date formatting
  private _formatDate(date: string): string {
    return new DatePipe('en-US').transform(date, 'YYYY-MM-dd') ?? ""
  }
}
