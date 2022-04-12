import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveStatusContainerComponent } from './leave-status-container/leave-status-container.component';


const routes: Routes = [{ path: '', component: LeaveStatusContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveStatusRoutingModule { }
