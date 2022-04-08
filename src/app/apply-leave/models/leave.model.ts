/**
 * @author Om Khambhata
 */

export class ApplyLeave {
    internId: number;
    appliedDate: string;
    fromDate: string;
    toDate: string;
    description: string;
    applicationTypeId: number;
    createdBy: string;
    createdDate: string;
    modifiedBy: string;
    modifiedDate: string;
    applicationStatus: number;
    applicationId: number

    constructor(
        internId: number,
        appliedDate: string,
        fromDate: string,
        toDate: string,
        description: string,
        applicationTypeId: number,
        createdBy: string,
        createdDate: string,
        modifiedBy: string,
        modifiedDate: string,
        applicationStatus: number,
        applicationId: number

    ) {
        this.internId = internId;
        this.appliedDate = appliedDate;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.description = description;
        this.applicationTypeId = applicationTypeId;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.modifiedBy = modifiedBy;
        this.modifiedDate = modifiedDate;
        this.applicationStatus = applicationStatus;
        this.applicationId = applicationId
    }
}
