import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarPerfilPage implements OnInit {
  data: any = {
    usuario: '',
    password: ''
  };

  informacion: any = {
    nombre: '',
    apellido: '',
    nivelEducacion: '',
    fechaNacimiento: ''
  };

  ngOnInit() {
    console.log('Componente ModificarPerfilPage inicializado con datos:', this.data, this.informacion);
  }
}
