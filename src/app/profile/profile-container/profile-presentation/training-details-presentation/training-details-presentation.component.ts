/**
 * @author Aman Patel
 */
import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
// -------------------------------------------------------------
import { Profile } from 'src/app/profile/models/profile.model';

@Component({
  selector: 'app-training-details-presentation',
  templateUrl: './training-details-presentation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingDetailsPresentationComponent {

  /** setter for user training details */
  @Input() public set trainingDetails(trainingData: Profile | null) {
    if (trainingData) {
      this._trainingDetails = trainingData;
    }
  }
  public get trainingDetails(): Profile {
    return this._trainingDetails;
  }

  /** user profile details */
  private _trainingDetails!: Profile;

}
