/**
 * @author Sushil Hariakar
 */

export class LeaveApplication {
  public applicationId: number;
  public appliedDate: string;
  public applicationTypeName: string;
  public noOfDays: number;
  public leaveDates: string;
  public description: string;
  public applicationStatus: number;
  public internName?: string;
  public internUserName?: string;

  constructor(
    applicationId: number,
    appliedDate: string,
    applicationTypeName: string,
    noOfDays: number,
    leaveDates: string,
    description: string,
    applicationStatus: number,
    internName?: string,
    internUserName?: string,
  ) {
    this.applicationId = applicationId;
    this.appliedDate = appliedDate;
    this.applicationTypeName = applicationTypeName;
    this.noOfDays = noOfDays;
    this.leaveDates = leaveDates;
    this.description = description;
    this.applicationStatus = applicationStatus;
    this.internName = internName;
    this.internUserName = internUserName;
  }
}
