import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';
import { ApplicationType, ApplyLeave } from '../../models/leave.model';
import { ApplyLeavePresenterService } from '../apply-leave-presenter/apply-leave-presenter.service';

@Component({
  viewProviders: [ApplyLeavePresenterService],
  selector: 'app-apply-leave-presentation',
  templateUrl: './apply-leave-presentation.component.html',
})
export class ApplyLeavePresentationComponent implements OnInit {
  //create from group
  public leaveForm: FormGroup;

  //get application type id
  @Input() public set leaveType(value: ApplicationType[] | null) {
    if (value) {
      console.log(value);
      this._leaveType = value;
    }
  }

  @Output() getLeaveData: EventEmitter<ApplyLeave>;


  //get leave type
  public get leaveType(): ApplicationType[] {
    return this._leaveType;
  }

  public selectedDateRange!: DateRange<Date>;
  public currentDate: Date;
  public noOfDays: number;
  public activeTab: number = 0;
  public startDate!: string | undefined;
  public endDate: string | undefined;
  private _leaveType!: ApplicationType[];
  public submitted:boolean;

  constructor(private _applyLeavePresenter: ApplyLeavePresenterService) {
    this.currentDate = new Date(this._applyLeavePresenter.incrementDay(new Date().getTime(), -90));
    this.noOfDays = 0;
    this.leaveForm = this._applyLeavePresenter.buildForm();
    this.getLeaveData = new EventEmitter<ApplyLeave>();
    this.submitted = false;
  }
  ngOnInit() {
    //emit leaveData 
    this._applyLeavePresenter.leaveData$.subscribe({
      next: (res) => {
        this.getLeaveData.emit(res)
        console.log(res);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  //get date range start to end
  public onDateRangeChange(date: Date | null) {
    if (date) {
      this.selectedDateRange = this._applyLeavePresenter.onSelectedChange(date, this.selectedDateRange);
      let end = this.selectedDateRange.end?.getTime() ?? 0;
      let start = this.selectedDateRange.start?.getTime() ?? 0;
      this.noOfDays = this._applyLeavePresenter.leaveCount(start, end);
      this.startDate = this.selectedDateRange.start?.toDateString();
      this.endDate = this.selectedDateRange.end?.toDateString();
    }
  }

  public disableWeekend = (date: Date): boolean => {
    const day = date.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  //get form controls
  public get formControl(){
      return this.leaveForm['controls'];
  }

  //form submit
  public onSubmit() {
    //check form is valid or not 
    if(this.leaveForm.status === 'INVALID'){
      this.submitted = true;
    }
    else{
      //submit data
      this._applyLeavePresenter.onSubmit(this.leaveForm.value ,this.startDate ,this.endDate ,this.activeTab);
    }
  }
}
