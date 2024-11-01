import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarPage } from './ingresar.page'; // Verifica que la ruta de importación sea correcta

const routes: Routes = [
  {
    path: '',
    component: IngresarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarPageRoutingModule {}

