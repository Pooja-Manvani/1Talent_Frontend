import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// -------------------------------------------------------------------------------------------------------- //
import { ChangePasswordComponent } from './core/components/change-password/change-password.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'apply-leave',
        loadChildren: () =>
          import('./apply-leave/apply-leave.module').then((m) => m.ApplyLeaveModule),
      },
      {
        path: 'leave-status',
        loadChildren: () =>
          import('./leave-status/leave-status.module').then((m) => m.LeaveStatusModule),
        },
      {
        path: 'leave-requests',
        loadChildren: () =>
          import('./leave-status/leave-status.module').then((m) => m.LeaveStatusModule),
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
