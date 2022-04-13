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
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // For password input field
    this.passwordField = {
      id: "password",
      className: "close"
    };
    // login formGroup
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // To control password show/hide.
  public togglePasswordVisibility(): void {
    this.passwordField.className = this.passwordField.className === "close" ? "open" : "close";
  }

  // Login api call.
  public onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe((res: LoginResponse) => {
      this.authService.setUserName(this.loginForm.value.userName);
      this.authService.setUserRole(res.role);
      this.authService.setToken(res.token);
      this.router.navigateByUrl("/dashboard");
    });
  }
}
