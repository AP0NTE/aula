import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PersonaConsultaComponent } from './ApoyoPersona/persona-consulta/persona-consulta.component';
import { PersonaRegistroReactivoComponent } from './ApoyoPersona/persona-registro-reactivo/persona-registro-reactivo.component';
import { ApoyoRegistroComponent } from './ApoyoPersona/apoyo-registro/apoyo-registro.component';
import { LoginComponent } from './ApoyoPersona/login/login.component';
const routes: Routes = [
  {path: 'personaConsulta', component: PersonaConsultaComponent},
  {path: 'personaRegistroReactivo', component: PersonaRegistroReactivoComponent},
  {path: 'apoyoRegistro', component: ApoyoRegistroComponent},
  {path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
