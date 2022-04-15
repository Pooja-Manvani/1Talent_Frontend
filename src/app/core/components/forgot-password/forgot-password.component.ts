/**
 * @author Mrunal Sen
 */

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  public forgotPassword: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _loaderService: LoaderService,
    private _authService: AuthService,
  ) {
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
      this._loaderService.setLoader(true);
      this._authService.resetPassword(this.forgotPassword.value).subscribe((res) => {
        this._loaderService.setLoader(false);
        this.router.navigateByUrl("/login");
      });
    }
  }
}
