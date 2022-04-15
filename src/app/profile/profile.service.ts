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
import { INTERN_PROFILE, MENTOR_PROFILE } from '../shared/constants';
import { Profile, ProfileAdapter } from './models/profile.model';

@Injectable()
export class ProfileService {

  // API base Link
  apiLink: string;

  constructor(private http: HttpClient, private _profileAdapter: ProfileAdapter) { 
    this.apiLink = environment.baseUrl + '/api/';
  }

  /**
   * Get Users Profile details
   * @param userName 
   * @returns User Profile
   */
  public getProfileDetails(userName: string, userRole: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiLink}${userRole === 'Mentor' ? MENTOR_PROFILE : INTERN_PROFILE}/${userName}`).pipe(
      map((profile) => {
        return this._profileAdapter.adapt(profile)
      })
    );
  }
}
