import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { LeaveApplication } from 'src/app/leave-status/models/leave-status.models';
import { LeaveStatusService } from 'src/app/leave-status/services/leave-status.service';
import { LeaveGrant } from 'src/app/shared/models/leave-grants.model';

@Component({
  selector: 'app-leave-table-container',
  templateUrl: './leave-table-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaveTableContainerComponent implements OnInit {

  @Input() public isDashboard!: boolean;
  public leavesList$: Observable<LeaveApplication[]>;
  private _userName: string;
  private _userRole: string;

  constructor(private _leaveStatusService: LeaveStatusService, private _toaster: ToastrService, private _cdr: ChangeDetectorRef) {
    this.leavesList$ = new Observable();
    this._userName = localStorage.getItem('userName') ?? '';
    this._userRole = localStorage.getItem('userRole') ?? '';
  }

  ngOnInit(): void {
    this.leavesList$ = this.getLeaveList();
  }

  getLeaveList(): Observable<LeaveApplication[]> {
    return this.isDashboard
    ? this._leaveStatusService.getDashboardData(this._userName, this._userRole)
    : this._leaveStatusService.getLeaveStatus(this._userName, this._userRole);
  }

  /**
   * @author Jigar Bhanushali
   * @description Send accept, reject or revoke leave grant from Mentor.
   * @param leaveGrantData 
   */
  public leaveGrant(leaveGrantData: LeaveGrant) {
    this._leaveStatusService.leaveGrant(leaveGrantData).subscribe((res) => {
      this._toaster.success(res.message);
      this.leavesList$ = this.getLeaveList();
      this._cdr.markForCheck();
    });
  }

  //post leave revoke request
  /**
   * @author Himani Barot
   * @description Revoke leave request by Intern.
   * @param data 
   */
  public revokeLeaveRequestData(data: LeaveGrant) {
    data.userName = this._userName;
    this._leaveStatusService.revokeLeaveRequest(data).subscribe((res: any) => {
      this._toaster.success(res.message);
      this.leavesList$ = this.getLeaveList();
      this._cdr.markForCheck();
    });
  }
}
