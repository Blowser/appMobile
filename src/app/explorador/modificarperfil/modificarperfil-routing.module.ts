import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarPerfilPage } from './modificarperfil.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarPerfilPageRoutingModule {}

