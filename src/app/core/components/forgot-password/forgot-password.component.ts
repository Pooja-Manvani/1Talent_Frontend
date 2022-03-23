import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpassword: FormGroup;
  constructor( private fb: FormBuilder, private router: Router) { 
    this.forgotpassword = this.fb.group({
      email: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if
    (this.forgotpassword.valid){
      this.router.navigateByUrl("/change-password")
    }
  }
}
