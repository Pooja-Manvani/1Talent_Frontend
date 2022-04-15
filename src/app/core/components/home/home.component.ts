import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  isSidebarOpen: boolean;

  constructor() {
    this.isSidebarOpen = false;
  }
}
