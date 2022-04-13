import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { ViewLeaveRequestPresentationComponent } from '../view-leave-request/view-leave-request-presentation/view-leave-request-presentation.component';

@Injectable()
export class LeaveTablePresenterService {

  private _overlayRef!: OverlayRef
  private _componentRef!: ComponentRef<ViewLeaveRequestPresentationComponent>

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
}
