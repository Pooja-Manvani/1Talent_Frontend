/**
 * @author Sushil Hariakar
 */

import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/shared/models/adapter.interface';

export class LeaveApplication {
  public applicationId: number;
  public appliedDate: string;
  public applicationTypeName: string;
  public noOfDays: number;
  public leaveDates: string;
  public description: string;
  public applicationStatus: number;
  constructor(
    applicationId: number,
    appliedDate: string,
    applicationTypeName: string,
    noOfDays: number,
    leaveDates: string,
    description: string,
    applicationStatus: number
  ) {
    this.applicationId = applicationId;
    this.appliedDate = appliedDate;
    this.applicationTypeName = applicationTypeName;
    this.noOfDays = noOfDays;
    this.leaveDates = leaveDates;
    this.description = description;
    this.applicationStatus = applicationStatus;
  }
}

@Injectable()
export class LeaveApplicationAdapter implements Adapter<LeaveApplication> {
  adapt(item: any): LeaveApplication {
    return new LeaveApplication(
      item.applicationId,
      item.appliedDate,
      item.applicationTypeName,
      item.noOfDays,
      item.leaveDates,
      item.description,
      item.applicationStatus
    );
  }
}
