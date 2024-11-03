import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarPerfilPage implements OnInit {
  datosUsuario: any = {
    usuario: '',
    password: ''
  };

  informacion: any = {
    nombre: '',
    apellido: '',
    nivelEducacion: '',
    fechaNacimiento: '' // Formato YYYY-MM-DD
  };

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Datos inicializados en ModificarPerfilPage:', this.datosUsuario, this.informacion);
  }

  regresar() {
    this.router.navigate(['/mapa']);
  }

  guardarCambios() {
    // Validación simple para el formato de fecha 
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!fechaRegex.test(this.informacion.fechaNacimiento)) {
      alert('Ingrese la fecha en formato correcto (YYYY-MM-DD).');
      return;
    }
    console.log('Cambios guardados:', this.datosUsuario, this.informacion);
    alert('Cambios guardados correctamente.');
  }
}

