import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  public forgotPassword: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.forgotPassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /**
   * @description Gets form controls
   */
  public get getvalue() {
    return this.forgotPassword.controls;
  }

  /**
   * @name onSubmit
   * @description If form is valid, submits email and redirects to log-in page
   */
  public onSubmit() {
    if (this.forgotPassword.valid) {
      this.authService.resetPassword(this.forgotPassword.value).subscribe((res) => {
        this.router.navigateByUrl("/login");
      });
    }
  }
}
