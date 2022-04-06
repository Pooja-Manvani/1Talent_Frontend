import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile/models/profile.model';
import { TrainingDetailsPresenterService } from '../training-details-presenter/training-details-presenter.service';

@Component({
  selector: 'app-training-details-presentation',
  templateUrl: './training-details-presentation.component.html',
  styleUrls: ['./training-details-presentation.component.scss'],
  viewProviders : [TrainingDetailsPresenterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TrainingDetailsPresentationComponent implements OnInit {

  /** setter for user training details */
  @Input() public set trainingDetails(trainingData : Profile | null){
    if(trainingData){
      this._trainingDetails = trainingData;
    }
  }
  public get trainingDetails() : Profile {
    return this._trainingDetails;
  }

  /** user profile details */
  private _trainingDetails! : Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
