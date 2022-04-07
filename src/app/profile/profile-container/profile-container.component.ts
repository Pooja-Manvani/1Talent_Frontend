import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit {

  // Observable for profile details
  public getProfileData$:Observable<Profile>;
  
  constructor(private profileService:ProfileService) { 
    this.getProfileData$ = new Observable<Profile>();
  }

  ngOnInit(): void {
    this.getProfileData$ = this.profileService.getProfileDetails('sample');
  }

}
