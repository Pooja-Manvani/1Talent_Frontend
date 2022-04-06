import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-details-presentation',
  templateUrl: './training-details-presentation.component.html',
  styleUrls: ['./training-details-presentation.component.scss']
})
export class TrainingDetailsPresentationComponent implements OnInit {

  @Input() public set trainingDetails(trainingData : Profile | null){
    if(trainingData){
      this._trainingDetails = trainingData;
    }
  }
  public get trainingDetails() : Profile {
    return this._trainingDetails;
  }

  private _trainingDetails! : Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
