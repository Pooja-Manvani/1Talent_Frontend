import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SHA256 } from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isEyeClosed: boolean;
  loginForm: FormGroup;

  constructor(private render: Renderer2, private fb: FormBuilder) {
    this.isEyeClosed = true;
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  public toggleEye(val?: boolean): void {
    if (val == undefined)
      this.isEyeClosed = !this.isEyeClosed;
    else
      this.isEyeClosed = false;
  }

  public onSubmit(): void {
    let pass = SHA256(this.loginForm.value.password);
    console.log(pass.toString());
  }
}
