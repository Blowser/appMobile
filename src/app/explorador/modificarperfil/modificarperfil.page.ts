import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarPerfilPage implements OnInit {


  informacion: any = {
    usuario: '',
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    nivelEducacion: '',
    fechaNacimiento: ''
  };

  constructor() {}

  ngOnInit() {
    // Cargar los datos almacenados al iniciar la página
    this.informacion.usuario = localStorage.getItem('usuario') || '';
    this.informacion.email = localStorage.getItem('email') || '';
    this.informacion.password = localStorage.getItem('password') || '';
    this.informacion.nombre = localStorage.getItem('nombre') || '';
    this.informacion.apellido = localStorage.getItem('apellido') || '';
    this.informacion.nivelEducacion = localStorage.getItem('nivelEducacion') || '';
    this.informacion.fechaNacimiento = localStorage.getItem('fechaNacimiento') || '';
  }

  guardarCambios() {
    // Guardar los cambios en el almacenamiento local
    localStorage.setItem('usuario', this.informacion.usuario);
    localStorage.setItem('email', this.informacion.email);
    localStorage.setItem('password', this.informacion.password);
    localStorage.setItem('nombre', this.informacion.nombre);
    localStorage.setItem('apellido', this.informacion.apellido);
    localStorage.setItem('nivelEducacion', this.informacion.nivelEducacion);
    localStorage.setItem('fechaNacimiento', this.informacion.fechaNacimiento);
    alert('Cambios guardados exitosamente.');
  }
}
