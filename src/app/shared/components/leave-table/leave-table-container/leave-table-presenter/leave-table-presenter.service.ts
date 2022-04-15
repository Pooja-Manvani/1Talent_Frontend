/**
 * @author Jigar Bhanushali
 */

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { LeaveApplication } from 'src/app/leave-status/models/leave-status.models';
import { LeaveGrant } from 'src/app/shared/models/leave-grants.model';
import { ConfirmationPopupComponent } from '../../../confirmation-popup/confirmation-popup.component';
import { ViewLeaveRequestPresentationComponent } from '../../view-leave-request/view-leave-request-presentation/view-leave-request-presentation.component';

@Injectable()
export class LeaveTablePresenterService {

  public buttonClick$: Observable<LeaveGrant>;
  private _buttonClick: Subject<LeaveGrant>;

  public leaveRevokeData$: Observable<LeaveGrant>;
  private _leaveRevokeData: Subject<LeaveGrant>;

  private _overlayRef!: OverlayRef
  private _viewLeaveComponentRef!: ComponentRef<ViewLeaveRequestPresentationComponent>
  private _confirmationRef!: ComponentRef<ConfirmationPopupComponent>;

  constructor(private overlay: Overlay) {
    this._buttonClick = new Subject();
    this.buttonClick$ = this._buttonClick.asObservable();
    
    this._leaveRevokeData = new Subject();
    this.leaveRevokeData$ = this._leaveRevokeData.asObservable();
  }

  /**
   * @name viewRequest
   * @description displays view request overlay 
   * @param leaveData 
   */
  public viewRequest(leaveData: LeaveApplication) {
    this._overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
        .width('80%')
    });

    const component = new ComponentPortal(ViewLeaveRequestPresentationComponent);
    this._viewLeaveComponentRef = this._overlayRef.attach(component);

    this._viewLeaveComponentRef.instance.requestData = leaveData;
    this._viewLeaveComponentRef.instance.buttonClickEvent.subscribe((leaveGrant: LeaveGrant) => {
      this._buttonClick.next(leaveGrant);
      this._overlayRef.detach();
    });

    this._viewLeaveComponentRef.instance.close.subscribe(() => {
      this._overlayRef.detach();
    });
  }

  /**
   * @author Himani Barot
   * @name displayConfirmation
   * @description displays confirmation popup for revoke requests
   */
  public displayConfirmationPopup(data: LeaveApplication, isRevokeConfirmationPopup: boolean) {

    let newRevokeData: LeaveGrant = {} as LeaveGrant;
    newRevokeData.applicationId = data.applicationId;
    newRevokeData.applicationStatus = data.applicationStatus;

    this._overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });

    const component = new ComponentPortal(ConfirmationPopupComponent);
    this._confirmationRef = this._overlayRef.attach(component);

    this._confirmationRef.instance.isRevokeConfirmationPopup = isRevokeConfirmationPopup;
    this._confirmationRef.instance.sendRevokeLeaveRequest.subscribe(()=>{
      this._leaveRevokeData.next(newRevokeData);
    });
    
    this._confirmationRef.instance.closeConfirmationPopup.subscribe(() => {
      this._overlayRef.detach();
    });
  }
}
