export class LeaveDetails {
    applicationId: number;
    appliedDate: string;
    applicationTypeName: string;
    noOfDays: number;
    leaveDates: string;
    description: string;
    applicationStatus: number;
    internName?: string;

    constructor(
        applicationId: number,
        appliedDate: string,
        applicationTypeName: string,
        noOfDays: number,
        leaveDates: string,
        description: string,
        applicationStatus: number,
        internName?: string,
    ) {
        this.applicationId = applicationId;
        this.appliedDate = appliedDate;
        this.applicationTypeName = applicationTypeName;
        this.noOfDays = noOfDays;
        this.leaveDates = leaveDates;
        this.description = description;
        this.applicationStatus = applicationStatus;
        this.internName = internName;
    }
}