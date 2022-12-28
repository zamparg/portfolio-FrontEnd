import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { ErrorComponent } from './components/error/error.component';


const appRoutes: Routes = [
  {path: '', component:BaseComponent, pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
