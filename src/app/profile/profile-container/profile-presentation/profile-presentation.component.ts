import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-presentation',
  templateUrl: './profile-presentation.component.html',
  styleUrls: ['./profile-presentation.component.scss']
})
export class ProfilePresentationComponent implements OnInit {

   /** setter for user data */
  @Input() public set profileDetails(profileData: Profile | null){
    if(profileData){
      this._profileData = profileData
    }
  }
  public get profileDetails() : Profile {
    return this._profileData;
  }

  /** user profile data */
  private _profileData : Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
