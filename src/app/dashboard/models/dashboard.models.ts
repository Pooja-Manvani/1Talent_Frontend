export class LeaveDetails {
    appliedDate: string;
    applicationTypeName: string;
    noOfDays: number;
    leaveDates: string;
    description: string;
    applicationStatus: number

    constructor(
        appliedDate: string,
        applicationTypeName: string,
        noOfDays: number,
        leaveDates: string,
        description: string,
        applicationStatus: number
    ) {
        this.appliedDate = appliedDate;
        this.applicationTypeName = applicationTypeName;
        this.noOfDays = noOfDays;
        this.leaveDates = leaveDates;
        this.description = description;
        this.applicationStatus = applicationStatus;
    }
}