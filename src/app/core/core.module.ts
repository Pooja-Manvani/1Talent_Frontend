import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// -------------------------------------------------------------------------------------------------- //
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastClass : "toast toast-bootstrap-compatibility-fix",
      positionClass: "toast-top-right",
      closeButton: true,
      timeOut: 4000,
      preventDuplicates: true,
    })
  ],
  exports: [
    LoginComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
