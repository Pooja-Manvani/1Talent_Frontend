/**
 * @author Om Khambhata
 */

export class ApplyLeave {
    fromDate: string;
    toDate: string;
    description: string;
    applicationTypeId: number;
    applicationStatus: number;
    userName: string;
    
    constructor(
        fromDate: string,
        toDate: string,
        description: string,
        applicationTypeId: number,
        applicationStatus: number,
        userName: string,
    ) {

        this.fromDate = fromDate;
        this.toDate = toDate;
        this.description = description;
        this.applicationTypeId = applicationTypeId;
        this.applicationStatus = applicationStatus;
        this.userName = userName;
    }
}

export class ApplicationType {

    applicationTypeId: number;
    applicationTypeName: string;
    createdBy: string;
    createdDate: string;

    constructor(
        applicationTypeId: number,
        applicationTypeName: string,
        createdBy: string,
        createdDate: string) {
        this.applicationTypeId = applicationTypeId,
            this.applicationTypeName = applicationTypeName,
            this.createdBy = createdBy,
            this.createdDate = createdDate
    }

}
