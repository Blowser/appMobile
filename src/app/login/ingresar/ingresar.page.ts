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
    // Validación del usuario
    if (this.user.usuario.length >= 3 && this.user.usuario.length <= 8 && /^[a-zA-Z0-9]+$/.test(this.user.usuario)) {
      // Validación de la contraseña numérica
      if (this.user.password.length === 4 && /^[0-9]+$/.test(this.user.password)) {
        // Pasar los datos al Home
        const navigationExtras: NavigationExtras = {
          state: {
            usuario: this.user.usuario
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



