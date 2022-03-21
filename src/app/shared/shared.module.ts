import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordMaskDirective } from './directives/password-mask/password-mask.directive';



@NgModule({
  declarations: [
    PasswordMaskDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PasswordMaskDirective
  ]
})
export class SharedModule { }
