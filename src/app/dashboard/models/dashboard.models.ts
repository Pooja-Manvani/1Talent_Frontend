import { Injectable } from "@angular/core";
import { Adapter } from "src/app/shared/models/adapter.interface";

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

// Karavelu nathi, jaate try karyu so, Sawal puchhva NAHI...!!!!!!!!!!!!!!!!!!
@Injectable({
    providedIn: "root"
})
export class InternAdapter implements Adapter<LeaveDetails> {
    adapt(item: any): LeaveDetails {
        return new LeaveDetails(
            item.appliedDate,
            item.applicationTypeName,
            item.noOfDays,
            item.leaveDates,
            item.description,
            item.applicationStatus,
        );
    }
}
