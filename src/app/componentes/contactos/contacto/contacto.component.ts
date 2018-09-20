import { Component, OnInit } from '@angular/core';

import { ContactoService } from '../../../servicios/contacto.service';
import { NgForm } from '@angular/forms';
import { Contacto } from '../../../modelos/contacto';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(
    public contactoService: ContactoService,
    private toastrService: ToastrService
    ) { }

  ngOnInit() {

    this.contactoService.obtenerContactos();
    this.resetForm();
  }


  onSubmit(contactoForm: NgForm) {
    if (contactoForm.value.$key == null) {
      this.contactoService.insertarContacto(contactoForm.value);
      this.toastrService.info('Contacto Agregado', 'Operacion Exitosa' );

    } else {
      this.contactoService.actualizarContacto(contactoForm.value);
      this.toastrService.warning('Contacto Modificado', 'Operacion Exitosa' );
    }
      this.resetForm(contactoForm);

  }
  resetForm(contactoForm?: NgForm) {
  if (contactoForm != null) {
    contactoForm.reset();
    this.contactoService.contactoSeleccionado = new Contacto();
  }
  }





}
