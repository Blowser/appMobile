import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModificarPerfilPageRoutingModule } from './modificarperfil-routing.module';
import { ModificarPerfilPage } from './modificarperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPerfilPageRoutingModule
  ],
  declarations: [ModificarPerfilPage]
})
export class ModificarPerfilPageModule {}

