export class Intern {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    trainingStart: string;
    trainingEnd: string;
    userName: string;
    password: string;
    mentorName: string;
    domainName: string;
    subDomainName: string

    constructor(firstName: string,
        middleName: string,
        lastName: string,
        email: string,
        contactNumber: string,
        trainingStart: string,
        trainingEnd: string,
        userName: string,
        password: string,
        mentorName: string,
        domainName: string,
        subDomainName: string) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.trainingStart = trainingStart;
        this.trainingEnd = trainingEnd;
        this.userName = userName;
        this.password = password;
        this.mentorName = mentorName;
        this.domainName = domainName;
        this.subDomainName = subDomainName
    }
}