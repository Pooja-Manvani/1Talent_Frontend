import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpassword: FormGroup;
  constructor( private fb: FormBuilder) { 
    this.forgotpassword = this.fb.group({
      email: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }
}
