import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  {path: '',
   pathMatch: "full",
   redirectTo: "login"
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
