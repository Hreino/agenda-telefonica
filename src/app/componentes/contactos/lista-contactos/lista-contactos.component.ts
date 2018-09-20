import { Component, OnInit } from '@angular/core';

import { ContactoService } from '../../../servicios/contacto.service';
import { Contacto } from '../../../modelos/contacto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  listaContactos: Contacto[];


  constructor(
    private contactoService: ContactoService,
    private toastr: ToastrService) { }

  ngOnInit( ) {
    this.contactoService.obtenerContactos()
    .snapshotChanges()
    .subscribe(item => {
      this.listaContactos = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.listaContactos.push( x as Contacto);
      });
    });
  }

  onEdit(contacto: Contacto) {
    this.contactoService.contactoSeleccionado = Object.assign({}, contacto );
  }

  onDelete($key: string) {
    if (confirm('Seguro que desea eliminarlo')) {
      this.contactoService.eliminarContacto($key);
      this.toastr.error('El contacto ha sido eliminado de Firebase', 'Contacto ELiminado');
    }

  }

}
