import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/////////////////////////////////////////////////////////////////////////
import { PasswordField } from '../../models/password-field.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  eye: PasswordField;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    // For password input field
    this.eye = {
      id: "password",
      className: "close"
    };
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  // To control password show/hide.
  public toggleEye(): void {
    if (this.eye.className == "close")
      this.eye.className = "open";
    else
      this.eye.className = "close";
  }

  public onSubmit(): void {
    let creds = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password
    }
    this.authService.login(creds).subscribe((res) => {
      console.log(res);
      this.authService.setToken(res.token);
    }, (error) => {
      console.error("Error: ", error);
    } );
  }
}
