import { Component } from '@angular/core';
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
export class LoginComponent {
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

  /**
   * @description for password visibility
   */
  public togglePasswordVisibility(): void {
    this.passwordField.className = this.passwordField.className === "close" ? "open" : "close";
  }

  /**
   * @description API call for Log in
   */
  public onSubmit(): void {
    this._authService.login(this.loginForm.value).subscribe((res: LoginResponse) => {
      this._authService.setUserName(this.loginForm.value.userName);
      this._authService.setUserRole(res.role);
      this._authService.setToken(res.token);
      this._router.navigateByUrl("/home");
    });
  }
}
