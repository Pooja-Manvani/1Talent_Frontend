import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { ApplicationType } from '../models/leave.model';
import { ApplyleaveService } from '../services/applyleave.service';

@Component({
  selector: 'app-apply-leave-container',
  templateUrl: './apply-leave-container.component.html',
})
export class ApplyLeaveContainerComponent implements OnInit {

  public $applicationTypeId:Observable<ApplicationType[]> ;
  constructor(private applyleave:ApplyleaveService) {
    this.$applicationTypeId = new Observable();
   }

  ngOnInit(): void {
    this.$applicationTypeId = this.applyleave.getApplicationTypeid();
  }


}
