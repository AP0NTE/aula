import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {

  personas: Persona[];
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.get().subscribe(result => {
      this.personas = result;
    });
  }

  apoyar(id:string):void{
    this.personas.find(x => x.identificacionP == id);
  }

}
