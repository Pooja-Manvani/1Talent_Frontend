import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';
import { Observable, Subject } from 'rxjs';
import { ApplyLeave } from '../../models/leave.model';

@Injectable({
  providedIn: 'root'
})
export class ApplyLeavePresenterService {
  private leaveData: Subject<ApplyLeave>;
  public leaveData$: Observable<ApplyLeave>;


  constructor(private fb: FormBuilder) {
    this.leaveData = new Subject<ApplyLeave>();
    this.leaveData$ = this.leaveData.asObservable();
  }

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
  public buildForm() {
    return this.fb.group({
      applicationTypeId: ['4'],
      description: ['', Validators.required],
    })
  }
  //onsubmit data
  public onSubmit(leavedata: ApplyLeave, fromDate: string | undefined, toDate: string | undefined, activeTab: number) {
    //set application status
    leavedata.applicationStatus = 3;
    //fromDate 
    if(fromDate){
      leavedata.fromDate = fromDate;
    }
    //toDate
    if (fromDate) {
      leavedata.toDate = toDate ? toDate : fromDate;
    }
    else {
      console.log('select Date');
    }
    //user select work from home
    leavedata.applicationTypeId = activeTab === 1 ? 1 : leavedata.applicationTypeId;

    this.leaveData.next(leavedata);
  }
}
