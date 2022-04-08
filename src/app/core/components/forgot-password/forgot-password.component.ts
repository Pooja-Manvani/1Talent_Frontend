import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService : AuthService) {
    this.forgotPassword = this.fb.group({
      email: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    let forgotPasswordCredentials = {
      email: this.forgotPassword.value.userName,
    }
    if (this.forgotPassword.valid) {
      this.authService.forgotPassword(forgotPasswordCredentials).subscribe((res)=>
      {
        
      })
    }
  }
}
