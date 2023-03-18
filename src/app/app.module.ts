import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';
import { BaseComponent } from './components/base/base.component';
import { LoginComponent } from './components/login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { interceptorProvider } from './services/interceptor-service';
import { NuevaExperienciaComponent } from './components/experience/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experience/editar-experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './components/education/nueva-educacion/nueva-educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './components/education/editar-educacion/editar-educacion/editar-educacion.component';
import { EditarSkilsComponent } from './components/skills/editar-skills/editar-skils/editar-skils.component';
import { NuevoSkilsComponent } from './components/skills/nuevo-skills/nuevo-skils/nuevo-skils.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    NavbarComponent,
    ErrorComponent,
    BaseComponent,
    LoginComponent,
    ProfileComponent,
    FooterComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    EditarSkilsComponent,
    NuevoSkilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
