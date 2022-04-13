import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { LeaveApplication } from 'src/app/leave-status/models/leave-status.models';
import { LeaveGrant } from 'src/app/shared/models/leave-grants.model';
import { ViewLeaveRequestPresentationComponent } from '../view-leave-request/view-leave-request-presentation/view-leave-request-presentation.component';

@Injectable()
export class LeaveTablePresenterService {

  private _buttonClick: Subject<LeaveGrant>;
  public buttonClick$: Observable<LeaveGrant>;
  
  private _overlayRef!: OverlayRef
  private _componentRef!: ComponentRef<ViewLeaveRequestPresentationComponent>

  constructor(private overlay: Overlay) {
    this._buttonClick = new Subject();
    this.buttonClick$ = this._buttonClick.asObservable();
  }

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
    this._componentRef = this._overlayRef.attach(component);

    this._componentRef.instance.requestData = leaveData;
    this._componentRef.instance.buttonClickEvent.subscribe((leaveGrant: LeaveGrant) => {
      this._buttonClick.next(leaveGrant);
      this._overlayRef.detach();
    });
    
    this._overlayRef.backdropClick().subscribe(() => {
      this._overlayRef.detach();
    })
  }
}
