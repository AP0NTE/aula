import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { ApoyoService } from 'src/app/services/apoyo.service';
import { Apoyo } from '../models/apoyo';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-apoyo-registro',
  templateUrl: './apoyo-registro.component.html',
  styleUrls: ['./apoyo-registro.component.css']
})
export class ApoyoRegistroComponent implements OnInit {

  apoyo: Apoyo;
  persona: Persona;
  formGroup: FormGroup;
  submitted = false;
  constructor(private apoyoService: ApoyoService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.apoyo = new Apoyo();
    let myDate = new Date();
    this.apoyo.valorApoyo = 0;
    this.apoyo.fechaEntrega= myDate;


    this.formGroup = this.formBuilder.group({
      valorApoyo: [this.apoyo.valorApoyo, Validators.required],
      fechaEntrega: [this.apoyo.fechaEntrega, Validators.required],

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
    this.apoyo.persona = this.formGroup.value;
    this.apoyoService.post(this.apoyo).subscribe(p => {
      if (p != null) {

        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Persona creada';

        this.apoyo = p;
      }
    });
  }

}

