import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details-prensentation',
  templateUrl: './personal-details-prensentation.component.html',
  styleUrls: ['./personal-details-prensentation.component.scss']
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
