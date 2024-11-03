import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  datosUsuario: any = { usuario: '' }; 
  informacion = {
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
        this.datosUsuario['usuario'] = navigation.extras.state['usuario'];
      } else {
        console.error('No se encontraron datos en extras.state');
        this.router.navigate(['/login/ingresar']);
      }
    });
  }

  ngOnInit() {
    console.log('Componente HomePage inicializado');
  }

  limpiarCampos() {
    const inputs = document.querySelectorAll('.animatable');
    inputs.forEach((input) => {
      const element = input as HTMLElement;
      element.classList.remove('animate-slide-in');
      void element.offsetWidth;
      element.classList.add('animate-slide-in');
    });

    this.informacion.nombre = '';
    this.informacion.apellido = '';
    this.informacion.nivelEducacion = '';
    this.informacion.fechaNacimiento = '';
  }

  mostrarInformacion() {
    if (this.informacion.nombre && this.informacion.apellido) {
      alert(`Nombre: ${this.informacion.nombre}
Apellido: ${this.informacion.apellido}
Nivel de Educación: ${this.informacion.nivelEducacion}
Fecha de Nacimiento: ${this.informacion.fechaNacimiento}`);

      console.log('Información mostrada:', this.informacion);
      setTimeout(() => {
        const navigationExtras: NavigationExtras = {
          state: {
            usuario: this.datosUsuario.usuario,
            ...this.informacion
          }
        };
        this.router.navigate(['/mapa'], navigationExtras);
      }, 100);
    } else {
      alert('Por favor complete todos los campos antes de continuar.');
    }
  }
}




