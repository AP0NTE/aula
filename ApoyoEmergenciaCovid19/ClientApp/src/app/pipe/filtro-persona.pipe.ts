import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../ApoyoPersona/models/persona';

@Pipe({
  name: 'filtroPersona'
})
export class FiltroPersonaPipe implements PipeTransform {

  transform(persona: Persona[], searchText: string): any {
    if (searchText == null) return persona;
    return persona.filter(p =>
    p.nombresP.toLowerCase()
    .indexOf(searchText.toLowerCase()) !== -1);
  }

}
