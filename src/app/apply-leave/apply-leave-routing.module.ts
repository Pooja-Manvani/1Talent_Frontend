import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveContainerComponent } from './apply-leave-container/apply-leave-container.component';

const routes: Routes = [{ path: '', component: ApplyLeaveContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyLeaveRoutingModule { }
