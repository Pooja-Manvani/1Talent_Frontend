/**
 * @author Aman Patel
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// -----------------------------------------------------------------------------
import { Profile } from 'src/app/profile/models/profile.model';

@Component({
  selector: 'app-personal-details-prensentation',
  templateUrl: './personal-details-prensentation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsPrensentationComponent {

  /** setter for profile personal data */
  @Input() public set personalDetails(value: Profile | null) {
    if (value) {
      this._personalDetails = value;
    }
  }
  public get personalDetails(): Profile {
    return this._personalDetails;
  }

  /** profile personal data */
  private _personalDetails!: Profile;

}
