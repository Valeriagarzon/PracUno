import { HomeComponent } from './pages/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { PerfilComponent } from './pages/pages/perfil/perfil.component';
import { EstructurasComponent } from './pages/pages/estructuras/estructuras.component';
import { UsuariosComponent } from './pages/pages/usuarios/usuarios.component';
import { DocumentacionComponent } from './pages/pages/documentacion/documentacion.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages/pages.module').then(m => m.PagesModule)
  },
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'estructuras', component: EstructurasComponent },
  { path: 'documentacion', component: DocumentacionComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/pages/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

