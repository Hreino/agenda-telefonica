import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../servicios/contacto.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent implements OnInit {

  constructor(private contactoService: ContactoService) { }

  ngOnInit() {
  }

}
