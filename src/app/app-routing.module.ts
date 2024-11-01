import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login/ingresar',  /*AQUI EMPIEZA LA APP*/
    pathMatch: 'full'
  },
  {
    path: 'login/ingresar',
    loadChildren: () => import('./login/ingresar/ingresar.module').then(m => m.IngresarPageModule)
  },
  {
    path: 'login/registrarse',
    loadChildren: () => import('./login/registrarse/registrarse.module').then(m => m.RegistrarsePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

