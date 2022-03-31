import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', 
    children:[
      { path:'', redirectTo:'board', pathMatch:'full'},
      { path:'board', component:DashboardContainerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
