import { Component } from '@angular/core';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarPerfilPage {
  perfil = {
    nombre: '',
    apellido: '',
    nivelEducacion: '',
    fechaNacimiento: '',
    email: '',
    usuario: '',
    password: ''
  };

  constructor() {
    // Aquí podrías inicializar los datos con los que ya existen
    // Ejemplo: cargar los datos de algún servicio o almacenamiento local
  }

  guardarCambios() {
    console.log('Cambios guardados:', this.perfil);
    alert('Los cambios han sido guardados.');
  }
}
