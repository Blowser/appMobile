import { Component } from '@angular/core';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarPerfilPage {
  data = {
    usuario: 'usuarioEjemplo', // Valor inicial de ejemplo, cámbialo según tu lógica
    password: 'contraseñaEjemplo', // Valor inicial de ejemplo, cámbialo según tu lógica
    nombre: '',
    apellido: '',
    nivelEducacion: '',
    fechaNacimiento: ''
  };

  constructor() { }
}
