import { Component, OnInit } from '@angular/core';

import { Persona } from '../models/persona';
import { PersonaService } from 'src/app/services/persona.service';

import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-persona-registro-reactivo',
  templateUrl: './persona-registro-reactivo.component.html',
  styleUrls: ['./persona-registro-reactivo.component.css']
})
export class PersonaRegistroReactivoComponent implements OnInit {

  persona: Persona;
  formGroup: FormGroup;
  submitted = false;

  constructor(private personaService: PersonaService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.persona = new Persona();
    this.persona.identificacionP = '';
    this.persona.nombresP = '';
    this.persona.apellidosP = '';
    this.persona.sexoP = '';
    this.persona.edadP = 0;
    this.persona.departamentoP = '';
    this.persona.ciudadP = '';

    this.formGroup = this.formBuilder.group({
      identificacionP: [this.persona.identificacionP, Validators.required],
      nombresP: [this.persona.nombresP, Validators.required],
      apellidosP: [this.persona.apellidosP, Validators.required],
      sexoP: [this.persona.sexoP, Validators.required],
      edadP: [this.persona.edadP, Validators.required],
      departamentoP: [this.persona.departamentoP, Validators.required],
      ciudadP: [this.persona.ciudadP, Validators.required ]

    });
  }

  get control() {
    return this.formGroup.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }

  add() {
    this.persona = this.formGroup.value;
    this.personaService.post(this.persona).subscribe(p => {
      if (p != null) {

        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Persona creada';

        this.persona = p;
      }
    });
  }

}
