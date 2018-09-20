import { Injectable } from '@angular/core';


// importando firebase
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Contacto } from '../modelos/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  // lista de contactos que traiga de firebase
  listacontacto: AngularFireList<any>;


  // Contacto Seleccionado
  contactoSeleccionado: Contacto = new Contacto();

  constructor( private firabase: AngularFireDatabase) { }
// METODOS
  // obtener

  obtenerContactos() {
    return this.listacontacto = this.firabase.list('contactos');
  }

  // insertar producto

  insertarContacto(contacto: Contacto) {
    this.listacontacto.push({
      nombre: contacto.nombre,
      movil: contacto.movil,
      casa: contacto.casa,
      twitter: contacto.twitter
    });
  }

  actualizarContacto(contacto: Contacto) {
    this.listacontacto.update(contacto.$key, {
      nombre: contacto.nombre,
      movil: contacto.movil,
      casa: contacto.casa
    });

  }

  eliminarContacto($key: string) {
    this.listacontacto.remove($key);
  }
}
