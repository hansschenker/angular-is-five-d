import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirtyCheckingRoutingModule } from './dirty-checking-routing.module';
import { DirtyCheckingComponent } from './dirty-checking.component';


@NgModule({
  declarations: [
    DirtyCheckingComponent
  ],
  imports: [
    CommonModule,
    DirtyCheckingRoutingModule
  ]
})
export class DirtyCheckingModule { }
