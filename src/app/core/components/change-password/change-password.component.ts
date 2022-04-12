/**
 * @author Chirag Patel
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// ---------------------------------------------------------------------
import { PasswordField } from '../../models/password-field.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  changePassword: FormGroup;
  passwordVisibility: PasswordField[]; // For running a loop instead of repeating same thing 3 times.

  constructor(private fb: FormBuilder, private route: Router, private auth: AuthService) {
    // Statically assigned three password input fields.
    this.passwordVisibility = [
      {
        id: 'old',
        className: 'close'
      },
      {
        id: 'new',
        className: 'close'
      },
      {
        id: 'confirm',
        className: 'close'
      }
    ];
    // Change Password formGroup
    this.changePassword = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('newPassword', 'confirmPassword')
    });

  }

  /**
   * @name toggleEye
   * @description To control password show/hide.
   * @param i index of the field
   */
  public toggleEye(i: number): void {
    if (this.passwordVisibility[i].className == "close")
      this.passwordVisibility[i].className = "open";
    else
      this.passwordVisibility[i].className = "close";
  }
  /**
   * @name onSubmit
   * @description API call for Change Password
   */
  onSubmit() {
    let { newPassword, oldPassword } = this.changePassword.value;
    this.auth.changePassword({ password: newPassword, oldPassword: oldPassword, userName: this.auth.getUserName() ?? '' }).subscribe((res) => {
      this.route.navigateByUrl("/dashboard");
    });
  }

  /**
   * @name getvalue
   * @description Gets form controls
   */
  public get getvalue() {
    return this.changePassword.controls;
  }

}
/**
 * @name ConfirmedValidator
 * @description Logic for matching the new password and confirm password fields
 */
function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
