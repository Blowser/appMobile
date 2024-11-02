import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage {
  user = {
    usuario: '',
    password: ''
  };

  constructor(private router: Router) {}

  ingresar() {
    if (this.user.usuario.length >= 3 && this.user.usuario.length <= 8 && /^\w+$/.test(this.user.usuario)) {
      if (this.user.password.length === 4 && /^\d+$/.test(this.user.password)) {
        const navigationExtras: NavigationExtras = {
          state: {
            usuario: this.user.usuario // Asegúrate de pasar los datos de usuario correctamente
          }
        };
        this.router.navigate(['/home'], navigationExtras);
      } else {
        alert('La contraseña debe tener 4 dígitos numéricos.');
      }
    } else {
      alert('El usuario debe tener entre 3 y 8 caracteres alfanuméricos.');
    }
  }
}


