import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { ErrorComponent } from './components/error/error.component';
// import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/auth.guard';


const appRoutes: Routes = [
  {path: '', component:BaseComponent, pathMatch: 'full'},
 // {path: 'login', component:LoginComponent},
  {path: 'profile', component:ProfileComponent, canActivate:[AuthGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
