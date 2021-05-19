import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'directives', loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule) }, 
  { path: 'bindings', loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule) }, 
  { path: 'decorators', loadChildren: () => import('./decorators/decorators.module').then(m => m.DecoratorsModule) }, 
  { path: 'di', loadChildren: () => import('./dependency-injection/dependency-injection.module').then(m => m.DependencyInjectionModule) }, 
  { path: 'changedetection', loadChildren: () => import('./dirty-checking/dirty-checking.module').then(m => m.DirtyCheckingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
