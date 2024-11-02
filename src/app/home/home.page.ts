import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit { // Implementación de OnInit
  data: any = { usuario: '' };
  informacion = { // Inicialización del objeto de información
    nombre: '',
    apellido: '',
    nivelEducacion: '',
    fechaNacimiento: ''
  };

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.queryParams.subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state && navigation.extras.state['usuario']) {
        console.log('Datos recibidos en Home:', navigation.extras.state);
        this.data['usuario'] = navigation.extras.state['usuario']; // Asignación correcta
      } else {
        console.error('No se encontraron datos en extras.state');
        this.router.navigate(['/login/ingresar']); // Redirección en caso de error
      }
    });
  }

  ngOnInit() {
    // Puedes agregar lógica de inicialización aquí si es necesario
    console.log('Componente HomePage inicializado');
  }

  limpiarCampos() {
    this.informacion.nombre = '';
    this.informacion.apellido = '';
    this.informacion.nivelEducacion = '';
    this.informacion.fechaNacimiento = '';
  }

  mostrarInformacion() {
    alert(`Nombre: ${this.informacion.nombre}
  Apellido: ${this.informacion.apellido}
  Nivel de Educación: ${this.informacion.nivelEducacion}
  Fecha de Nacimiento: ${this.informacion.fechaNacimiento}`);
  }
 
}


