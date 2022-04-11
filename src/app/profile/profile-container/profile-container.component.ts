import { Component, OnInit } from '@angular/core';
// ------------------------------------------------------------------------
import { Observable } from 'rxjs/internal/Observable';
import { Profile } from '../models/profile.model';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
})
export class ProfileContainerComponent implements OnInit {

  // Observable for profile details
  private userRole!: string | null;
  private userName!: string | null;
  public getProfileData$: Observable<Profile>;

  constructor(private profileService: ProfileService) {
    this.getProfileData$ = new Observable<Profile>();
  }

  ngOnInit(): void {
    this.userRole = localStorage.getItem("userRole") ?? '';
    this.userName = localStorage.getItem("userName") ?? '';
    this.getProfileData$ = this.profileService.getProfileDetails(this.userName, this.userRole);
    this.profileService.getProfileDetails(this.userName, this.userRole).subscribe(res => {
      console.log(res);
    })
  }
}
