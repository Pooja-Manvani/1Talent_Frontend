/**
 * @author Abhishek Patel
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// ----------------------------------------------------------------------
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
// ----------------------------------------------------------------------
import { environment } from 'src/environments/environment';
import { Profile, ProfileAdapter } from './models/profile.model';

@Injectable()
export class ProfileService {

  // API base Link
  apiLink: string = environment.baseUrl;

  constructor(private http: HttpClient, private _profileAdapter: ProfileAdapter) { }

  /**
   * Get Users Profile details
   * @param userName 
   * @returns User Profile
   */
  public getProfileDetails(userName: string, userRole: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiLink}/api/${userRole}'Profile'/${userName}`).pipe(
      map((profile) => {
        return this._profileAdapter.adapt(profile)
      })
    );
  }
}
