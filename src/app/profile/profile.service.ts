import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// -------------------------------------------------------------------
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from './models/profile.model';

@Injectable()
export class ProfileService {

  // API base Link
  apiLink: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  /**
   * Get Users Profile details
   * @param userName 
   * @returns User Profile
   */
  public getProfileDetails(userName:string):Observable<Profile>{
    return this.http.get<Profile>(`${this.apiLink}/api/InternProfile/${userName}`);
  }
}
