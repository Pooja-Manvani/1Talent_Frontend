export class LeaveGrant {
    public applicationId: number;
    public userName: string;
    public applicationStatus: number;
    public button: string;

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
