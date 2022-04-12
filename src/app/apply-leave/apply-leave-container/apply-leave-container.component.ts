import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { ApplicationType, ApplyLeave } from '../models/leave.model';
import { ApplyleaveService } from '../services/applyleave.service';

@Component({
  selector: 'app-apply-leave-container',
  templateUrl: './apply-leave-container.component.html',
})
export class ApplyLeaveContainerComponent implements OnInit {

  private _userName: string;
  public $applicationType:Observable<ApplicationType[]> ;
  constructor(private applyleave:ApplyleaveService) {
    this.$applicationType = new Observable();
    this._userName = '';
   }

  ngOnInit(): void {
    this.$applicationType = this.applyleave.getApplicationTypeid();
    this._userName = localStorage.getItem('userName') ?? '';
  }

  public onSubmit(data: ApplyLeave) {
    //post call for leave request
    // this.applyleave.postLeaveRequest(data,this._userName).subscribe({
    //   next:(res) =>{
    //     alert("leave has been applied")
    //   },
    //   error:(error) =>{
    //     console.log(error);
    //   }
    // })
  }

}
