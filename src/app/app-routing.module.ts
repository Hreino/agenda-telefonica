import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaContactosComponent} from './componentes/contactos/lista-contactos/lista-contactos.component';
import {ContactoComponent} from './componentes/contactos/contacto/contacto.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';


const routes: Routes = [
  {path: 'home', component: ContactosComponent},
  {path: 'lista', component: ListaContactosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [ListaContactosComponent, ContactoComponent, ContactosComponent];
