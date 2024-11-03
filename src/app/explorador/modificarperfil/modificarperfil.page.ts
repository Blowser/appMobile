import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    fechaNacimiento: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Verificar si hay datos pasados por la navegación
    const state = history.state;
    if (state.usuario) {
      this.datosUsuario.usuario = state.usuario;
      console.log('Datos de usuario cargados desde la navegación:', this.datosUsuario);
    }

    // Puedes incluir aquí lógica adicional para obtener más datos de almacenamiento local o servicios si es necesario
  }
}

