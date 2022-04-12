import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// -------------------------------------------------------------------------------------------------- //
import { LoginResponse } from '../../models/login.model';
import { PasswordField } from '../../models/password-field.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public passwordField: PasswordField;
  public loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    // For password input field
    this.passwordField = {
      id: "password",
      className: "close"
    };
    // login formGroup
    this.loginForm = this._fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.props();
  }

  /**
   * @name props
   * @description  It calls all methods when component initialized
   */
  
  public props() {
    this._authService.checkAuthentication().subscribe(result => {
      if (result) {
        this._router.navigateByUrl("/home");
      }
    });
  }

  // To control password show/hide.
  public togglePasswordVisibility(): void {
    this.passwordField.className = this.passwordField.className === "close" ? "open" : "close";
  }

  // Login api call.
  public onSubmit(): void {
    this._authService.login(this.loginForm.value).subscribe((res: LoginResponse) => {
      this._authService.setUserName(this.loginForm.value.userName);
      this._authService.setUserRole(res.role);
      this._authService.setToken(res.token);
      this._router.navigateByUrl("/home");
    });
  }
}
