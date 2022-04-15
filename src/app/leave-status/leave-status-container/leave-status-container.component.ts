import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// --------------------------------------------------------------------- //
import { Observable } from 'rxjs/internal/Observable';
import { LeaveGrant } from 'src/app/shared/models/leave-grants.model';
import { LeaveApplication } from '../models/leave-status.models';
import { LeaveStatusService } from '../services/leave-status.service';

@Component({
  selector: 'app-leave-status-container',
  templateUrl: './leave-status-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaveStatusContainerComponent {

  // public internLeaveStatus$: Observable<LeaveApplication[]>;
  // private _userName: string;
  // private _userRole: string;

  public pageTitle: string;

  constructor(private _leaveStatusService: LeaveStatusService, private _toaster: ToastrService, private _cdr: ChangeDetectorRef) {
  //   this.internLeaveStatus$ = new Observable();
  //   this._userName = localStorage.getItem('userName') ?? ''
  //   this._userRole = localStorage.getItem('userRole') ?? ''
    this.pageTitle = 'Leave ' + (localStorage.getItem('userRole') === 'Intern' ? 'Status' : 'Request');
  }

  // ngOnInit(): void {
  //   this.internLeaveStatus$ = this._leaveStatusService.getLeaveStatus(this._userName, this._userRole);
  // }

  // /**
  //  * @author Jigar Bhanushali
  //  * @description Send accept, reject or revoke leave grant from Mentor.
  //  * @param leaveGrantData 
  //  */
  // public leaveGrant(leaveGrantData: LeaveGrant) {
  //   this._leaveStatusService.leaveGrant(leaveGrantData).subscribe((res) => {
  //     this._toaster.success(res.message);
  //     this.internLeaveStatus$ = this._leaveStatusService.getLeaveStatus(this._userName, this._userRole);
  //     this._cdr.markForCheck();
  //   });
  // }

  // //post leave revoke request
  // /**
  //  * @author Himani Barot
  //  * @description Revoke leave request by Intern.
  //  * @param data 
  //  */
  // public revokeLeaveRequestData(data: LeaveGrant) {
  //   data.userName = this._userName;
  //   this._leaveStatusService.revokeLeaveRequest(data).subscribe((res: any) => {
  //     this._toaster.success(res.message);
  //     this.internLeaveStatus$ = this._leaveStatusService.getLeaveStatus(this._userName, this._userRole);
  //     this._cdr.markForCheck();
  //   });
  // }


}
