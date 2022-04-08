import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// ---------------------------------------------------------------------
import { PasswordField } from '../../models/password-field.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  changePassword: FormGroup;
  eyes: PasswordField[]; // For running a loop instead of repeating same thing 3 times.

  constructor(private fb: FormBuilder, private route: Router) {
    // Statically assigned three password input fields.
    this.eyes = [
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
    this.changePassword = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  // To control password show/hide.
  public toggleEye(i: number): void {
    if (this.eyes[i].className == "close")
      this.eyes[i].className = "open";
    else
      this.eyes[i].className = "close";
  }

  onSubmit() { }
}
