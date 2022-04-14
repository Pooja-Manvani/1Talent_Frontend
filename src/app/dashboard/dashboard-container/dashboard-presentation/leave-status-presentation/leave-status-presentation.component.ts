import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-status-presentation',
  templateUrl: './leave-status-presentation.component.html',
})
export class LeaveStatusPresentationComponent {
  userRole : string;

  constructor(){
    this.userRole = localStorage.getItem("userRole")?? '';
  }
}
