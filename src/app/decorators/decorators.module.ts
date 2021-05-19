import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorsRoutingModule } from './decorators-routing.module';
import { DecoratorsComponent } from './decorators.component';


@NgModule({
  declarations: [
    DecoratorsComponent
  ],
  imports: [
    CommonModule,
    DecoratorsRoutingModule
  ]
})
export class DecoratorsModule { }
