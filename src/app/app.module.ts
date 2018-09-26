import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


// configurando firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';

// componentes
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { ListaContactosComponent } from './componentes/contactos/lista-contactos/lista-contactos.component';
import { ContactoComponent } from './componentes/contactos/contacto/contacto.component';


// servicios
import { ContactoService } from './servicios/contacto.service';
import { AppRoutingModule, routingComponents } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [
    ContactoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
