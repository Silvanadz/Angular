import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component';
import { ExperLaboralComponent } from './components/exper-laboral/exper-laboral.component';
import { CvComponent } from './components/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    SectionComponent,
    EducacionComponent,
    CursosComponent,
    InfoPersonalComponent,
    ExperLaboralComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
