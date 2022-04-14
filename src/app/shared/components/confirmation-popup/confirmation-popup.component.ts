import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
})
export class ConfirmationPopupComponent implements OnInit {

  // Condition used for confirmation popup
  @Input() isRevokeConfirmationPopup!: boolean;

  // EventEmitter to close confirmation popup
  @Output() closeConfirmationPopup: EventEmitter<any>;

  // EventEmitter to send revoke leave request
  @Output() sendRevokeLeaveRequest: EventEmitter<any>;

  constructor() {
    this.closeConfirmationPopup = new EventEmitter<any>();
    this.sendRevokeLeaveRequest = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  /**
   * @name closeModal
   * @description Close confirmation popup onclick
   */
  public closeModal() {
    this.closeConfirmationPopup.emit();
  }

  /**
   * @name revokeLeaveRequest
   * @description Send revoke leave request onclick
   */
  public revokeLeaveRequest() {
    this.sendRevokeLeaveRequest.emit();
    this.closeModal();
  }
}
