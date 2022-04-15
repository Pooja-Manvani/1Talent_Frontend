import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-leave-status-container',
  templateUrl: './leave-status-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaveStatusContainerComponent {
  public pageTitle: string;

  constructor() {
    this.pageTitle = 'Leave ' + (localStorage.getItem('userRole') === 'Intern' ? 'Status' : 'Request');
  }
}
