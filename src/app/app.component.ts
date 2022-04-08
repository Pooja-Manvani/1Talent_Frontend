import { Component, OnInit } from '@angular/core';

// ------------------------------------------------------------------------ //
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title = '1Talent';
  public isAuthenticated: boolean;

  constructor(private _authService: AuthService) {
    this.isAuthenticated = false;
  }

  ngOnInit(): void {
    this._authService.checkAuthentication().subscribe(result => this.isAuthenticated = result);
  }
}
