import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { EditarEducacionComponent } from './components/education/editar-educacion/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/education/nueva-educacion/nueva-educacion/nueva-educacion.component';
import { ErrorComponent } from './components/error/error.component';
import { EditarExperienciaComponent } from './components/experience/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experience/nueva-experiencia/nueva-experiencia.component';
// import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditarSkilsComponent } from './components/skills/editar-skills/editar-skils/editar-skils.component';
import { NuevoSkilsComponent } from './components/skills/nuevo-skills/nuevo-skils/nuevo-skils.component';
import { AuthGuard } from './services/auth.guard';


const appRoutes: Routes = [
  {path: '', component:BaseComponent, pathMatch: 'full'},
 // {path: 'login', component:LoginComponent},
  {path: 'profile', component:ProfileComponent, canActivate:[AuthGuard]},
  {path: 'nueva_experiencia', component:NuevaExperienciaComponent},
  {path: 'editar_experiencia/:id', component:EditarExperienciaComponent},
  {path: 'nueva_educacion', component:NuevaEducacionComponent},
  {path: 'editar_educacion/:id', component:EditarEducacionComponent},
  {path: 'nuevo_skills', component:NuevoSkilsComponent},
  {path: 'editar_skills/:id', component:EditarSkilsComponent},

  {path: '**', component: ErrorComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
