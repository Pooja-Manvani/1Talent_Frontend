import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaveTableComponent } from './components/leave-table/leave-table.component';



@NgModule({
  declarations: [
    LeaveTableComponent
  ],
  imports: [
    CommonModule    
  ],
  exports: [
    ReactiveFormsModule,
    LeaveTableComponent
  ]
})
export class SharedModule { }
