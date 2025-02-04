import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EstructurasComponent } from './pages/estructuras/estructuras.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'estructuras', component: EstructurasComponent},
  { path: 'documentacion', component: DocumentacionComponent },
  { path: 'usuarios', component: UsuariosComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PagesRoutingModule { }
