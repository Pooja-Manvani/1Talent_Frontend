import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {

  @Output() close : EventEmitter<any>;

  constructor() { 
    this.close = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  public closeModal(){
    this.close.emit();
  }

}
