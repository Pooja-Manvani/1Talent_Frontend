import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ComponentRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConfirmationPopupComponent } from 'src/app/shared/components/confirmation-popup/confirmation-popup.component';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ApplicationType, ApplyLeave } from '../models/leave.model';
import { ApplyleaveService } from '../services/applyleave.service';

@Component({
  selector: 'app-apply-leave-container',
  templateUrl: './apply-leave-container.component.html',
})
export class ApplyLeaveContainerComponent implements OnInit {
  public $applicationType: Observable<ApplicationType[]>;

  private _overlayRef!: OverlayRef
  private _confirmationRef!: ComponentRef<ConfirmationPopupComponent>;

  private _userName: string;

  constructor(
    private _applyleave: ApplyleaveService,
    private _overlay: Overlay,
    private _loaderService: LoaderService,
  ) {
    this.$applicationType = new Observable();
    this._userName = '';
  }

  ngOnInit(): void {
    this.$applicationType = this._applyleave.getApplicationTypeMap();
    this._userName = localStorage.getItem('userName') ?? '';
  }

  public onSubmit(data: ApplyLeave) {
    //post call for leave request
    this._loaderService.setLoader(true);
    this._applyleave.postLeaveRequest(data, this._userName).subscribe((res) => {
      this._loaderService.setLoader(false);
      // Open confirmation popup when Leave applied successfully.
      this._overlayRef = this._overlay.create({
        hasBackdrop: true,
        positionStrategy: this._overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
      });

      const component = new ComponentPortal(ConfirmationPopupComponent);
      this._confirmationRef = this._overlayRef.attach(component);

      this._confirmationRef.instance.closeConfirmationPopup.subscribe(() => {
        this._overlayRef.detach();
      });
    });
  }
}
