import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { ApplicationType } from '../../models/leave.model';
import { ApplyLeavePresenterService } from '../apply-leave-presenter/apply-leave-presenter.service';

@Component({
  viewProviders: [ApplyLeavePresenterService],
  selector: 'app-apply-leave-presentation',
  templateUrl: './apply-leave-presentation.component.html',
})
export class ApplyLeavePresentationComponent {
  //get application type id
 @Input() public set applicationTypeId(value:ApplicationType[] | null){
   if(value){
    this._leaveTypeId = value;
    console.log(this._leaveTypeId);
   }
 }

 //get leave type id 
 public get leaveTypeId():ApplicationType[]{
   return this.leaveTypeId;
 }

  @ViewChildren('tabItems') activeItems!: QueryList <ElementRef>;
  public selectedDateRange!: DateRange<Date>;
  public currentDate: Date;
  public noOfDays: number;
  public activeTab:number = 0;
  private _leaveTypeId!:ApplicationType[];

  constructor(private _applyLeavePresenter: ApplyLeavePresenterService) {
    this.currentDate = new Date(this._applyLeavePresenter.incrementDay(new Date().getTime(), -90));
    this.noOfDays = 0;
  }

  onDateRangeChange(date: Date | null) {
    if (date) {
      this.selectedDateRange = this._applyLeavePresenter.onSelectedChange(date, this.selectedDateRange);
      console.log(this.selectedDateRange);
      let end = this.selectedDateRange.end?.getTime() ?? 0;
      let start = this.selectedDateRange.start?.getTime() ?? 0;
      this.noOfDays = this._applyLeavePresenter.leaveCount(start, end);
    }
  }

  disableWeekend = (date: Date): boolean => {
    const day = date.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
}
