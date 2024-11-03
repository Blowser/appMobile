import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarPerfilPage implements OnInit {
  data = {
    usuario: '', // Se llenará con el usuario ingresado anteriormente
    password: '', // Se llenará con la contraseña ingresada anteriormente
  };

  informacion = {
    nombre: '', // Se llenará con el nombre ingresado anteriormente
    apellido: '', // Se llenará con el apellido ingresado anteriormente
    nivelEducacion: '', // Se llenará con el nivel de educación
    fechaNacimiento: '' // Se llenará con la fecha de nacimiento
  };

    ngOnInit() {
      console.log('Componente ModificarPerfilPage inicializado');
    }
  
  
  
  }