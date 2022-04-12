/**
 * @author Chirag Patel
 * @description password credentials
 */
export class ChangePassword {
    public userName: string;
    public password: string;
    public oldPassword: string;

    constructor(
        userName: string,
        password: string,
        oldPassword: string, 

    ) {
        this.userName = userName;        
        this.password = password;        
        this.oldPassword = oldPassword;        
    }
}