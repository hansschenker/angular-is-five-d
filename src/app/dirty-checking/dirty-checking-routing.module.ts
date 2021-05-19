import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirtyCheckingComponent } from './dirty-checking.component';

const routes: Routes = [{ path: '', component: DirtyCheckingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirtyCheckingRoutingModule { }
