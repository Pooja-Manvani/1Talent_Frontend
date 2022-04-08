import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-profile-presentation',
  templateUrl: './profile-presentation.component.html',
})
export class ProfilePresentationComponent implements OnInit {

  /** setter for user data */
  @Input() public set profileDetails(value: Profile | null) {
    if (value) {
      this._profileData = value;
    }
  }
  public get profileDetails(): Profile {
    return this._profileData;
  }

  /** user profile data */
  private _profileData!: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
