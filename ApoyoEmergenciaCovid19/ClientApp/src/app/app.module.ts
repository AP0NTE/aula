import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PersonaConsultaComponent } from './ApoyoPersona/persona-consulta/persona-consulta.component';
import { ApoyoRegistroComponent } from './ApoyoPersona/apoyo-registro/apoyo-registro.component';
import { AppRoutingModule } from './app-routing.module';

import { PersonaService } from './services/persona.service';
import { PersonaRegistroReactivoComponent } from './ApoyoPersona/persona-registro-reactivo/persona-registro-reactivo.component';
import { FiltroPersonaPipe } from './pipe/filtro-persona.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { LoginComponent } from './apoyopersona/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PersonaConsultaComponent,
    ApoyoRegistroComponent,
    PersonaRegistroReactivoComponent,
    FiltroPersonaPipe,
    AlertModalComponent,
    LoginComponent
  ],
  imports: [
    
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [AlertModalComponent],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
