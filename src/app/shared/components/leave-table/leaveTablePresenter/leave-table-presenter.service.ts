import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { ConfirmationPopupComponent } from '../confirmation-popup/confirmation-popup.component';
import { ViewLeaveRequestPresentationComponent } from '../view-leave-request/view-leave-request-presentation/view-leave-request-presentation.component';

@Injectable()
export class LeaveTablePresenterService {

  private _overlayRef!: OverlayRef
  private _componentRef!: ComponentRef<ViewLeaveRequestPresentationComponent>
  private _confirmationRef!: ComponentRef<ConfirmationPopupComponent>;

  constructor(private overlay: Overlay) { }

  public viewRequest() {
    this._overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .right(),
    });

    const component = new ComponentPortal(ViewLeaveRequestPresentationComponent);
    this._componentRef = this._overlayRef.attach(component);
  }

  public displayConfirmation() {
    this._overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });

    const component = new ComponentPortal(ConfirmationPopupComponent);
    this._componentRef = this._overlayRef.attach(component);

    this._confirmationRef.instance.close.subscribe((name) => {
      this._overlayRef.detach();
    });
  }
}
