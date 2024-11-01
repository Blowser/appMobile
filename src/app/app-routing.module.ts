import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login/ingresar',
    pathMatch: 'full'
  },
  {
    path: 'login/ingresar',
    loadChildren: () => import('./login/ingresar/ingresar.module').then(m => m.IngresarPageModule)
  },
  {
    path: 'login/registrarse',
    loadChildren: () => import('./login/registrarse/registrarse.module').then(m => m.RegistrarsePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

