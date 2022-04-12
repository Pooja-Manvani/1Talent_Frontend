export class changePassword {
    public username: string;
    public password: string;
    public confirmPassword: string;

    constructor(
        username: string,
        password: string,
        confirmPassword: string, 

    ) {
        this.username = username;        
        this.password = password;        
        this.confirmPassword = confirmPassword;        
    }
}