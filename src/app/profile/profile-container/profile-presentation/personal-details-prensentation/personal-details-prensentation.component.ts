import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile/models/profile.model';
import { PersonalDetailsPresenterService } from '../personal-details-presenter/personal-details-presenter.service';

@Component({
  selector: 'app-personal-details-prensentation',
  templateUrl: './personal-details-prensentation.component.html',
  viewProviders : [PersonalDetailsPresenterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsPrensentationComponent implements OnInit {

  /** setter for profile personal data */
  @Input() public set personalDetails(personalData : Profile | null) {
    if(personalData){
      this._personalDetails = personalData;
    }
  }
  public get personalDetails() : Profile {
    return this._personalDetails;
  }

  /** profile personal data */
  private _personalDetails! : Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
