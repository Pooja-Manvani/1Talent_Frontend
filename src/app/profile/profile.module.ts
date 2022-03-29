import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ProfilePresentationComponent } from './profile-container/profile-presentation/profile-presentation.component';
import { PersonalDetailsPrensentationComponent } from './profile-container/profile-presentation/personal-details-prensentation/personal-details-prensentation.component';
import { TrainingDetailsPresentationComponent } from './profile-container/profile-presentation/training-details-presentation/training-details-presentation.component';



@NgModule({
  declarations: [
  
    ProfileContainerComponent,
       ProfilePresentationComponent,
       PersonalDetailsPrensentationComponent,
       TrainingDetailsPresentationComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
