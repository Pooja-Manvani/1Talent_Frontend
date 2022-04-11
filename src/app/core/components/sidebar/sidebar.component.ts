import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private _service: AuthService,private _router : Router){

  }
  /**
   * @name signOut
   * @description service call for token removal and route to login page
   */
  public signOut(){
    this._service.clearLocalStorage()
    this._router.navigateByUrl("/login")
  }
}
