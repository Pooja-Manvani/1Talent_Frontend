import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SHA256 } from 'crypto-js';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isEyeClosed: string;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.isEyeClosed = "close";
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  public toggleEye(): void {
    if (this.isEyeClosed == "close")
      this.isEyeClosed = "open";
    else
      this.isEyeClosed = "close";
  }

  public onSubmit(): void {
    let creds = {
      username: this.loginForm.value.username,
      password: SHA256(this.loginForm.value.password).toString()
    }
    this.authService.login(creds).subscribe((res) => {
      console.log(res);
      this.authService.setToken(res.token);
    });
  }
}
