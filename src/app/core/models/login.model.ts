/**
 * @author Hrishikesh Patel
 */

/**
 * @description Login credentials.
 */
export class LoginCredentials {
    public userName: string;
    public password: string;

    constructor(
        userName: string,
        password: string,
    ) {
        this.userName = userName;
        this.password = password;
    }
}

/**
 * @description Login response.
 */
export class LoginResponse {
    public message: string;
    public role: string;
    public token: string;

    constructor(
        message: string,
        role: string,
        token: string,
    ) {
        this.message = message;
        this.role = role;
        this.token = token;
    }
}
