/**
 * @author Aayushi Parmar
 */

import { Injectable } from "@angular/core";
import { Adapter } from "src/app/shared/models/adapter.interface";

class Interns {
  public internName: string;

  constructor(internsName: string) {
    this.internName = internsName;
  }
}

export class Profile {
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public email: string;
  public contactNumber: string;
  public trainingStart: string;
  public trainingEnd: string;
  public userName: string;
  public password: string;
  public mentorName?: string;
  public internsNames?: Interns[];
  public domainName: string;
  public subDomainName: string;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    contactNumber: string,
    trainingStart: string,
    trainingEnd: string,
    userName: string,
    domainName: string,
    subDomainName: string,
    password: string,
    internsNames?: Interns[],
    mentorName?: string,
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.email = email;
    this.contactNumber = contactNumber;
    this.trainingStart = trainingStart;
    this.trainingEnd = trainingEnd;
    this.userName = userName;
    this.password = password;
    this.domainName = domainName;
    this.subDomainName = subDomainName;
    this.mentorName = mentorName;
    this.internsNames = internsNames;
  }

  public get fullName(): string {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }
}

@Injectable()
export class ProfileAdapter implements Adapter<Profile> {
  adapt(item: any): Profile {
    return new Profile(
      item.firstName,
      item.middleName,
      item.lastName,
      item.email,
      item.contactNumber,
      item.trainingStart,
      item.trainingEnd,
      item.userName,
      item.Password,
      item.internNames,
      item.mentorName,
      item.domainName,
      item.subDomainName
    );
  }
}
