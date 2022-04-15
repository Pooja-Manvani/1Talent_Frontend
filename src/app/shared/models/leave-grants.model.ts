export class LeaveGrant {
    applicationId: number;
    userName: string;
    applicationStatus: number;
    button: string;

    constructor(
        applicationId: number,
        userName: string,
        applicationStatus: number,
        button: string,
    ) {
        this.applicationId = applicationId;
        this.userName = userName;
        this.applicationStatus = applicationStatus;
        this.button = button;
    }
}
