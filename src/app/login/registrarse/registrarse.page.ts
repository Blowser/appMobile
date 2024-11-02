import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage {
  data: any = {
    usuario: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  registrarse() {
    // Validación del usuario (3-8 caracteres alfanuméricos)
    if (this.data.usuario.length >= 3 && this.data.usuario.length <= 8 && /^[a-zA-Z0-9]+$/.test(this.data.usuario)) {
      // Validación de la contraseña numérica de 4 dígitos
      if (this.data.password.length === 4 && /^[0-9]+$/.test(this.data.password)) {
        // Verificar si las contraseñas coinciden
        if (this.data.password === this.data.confirmPassword) {
          // Validación del formato del correo
          if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.data.email)) {
            console.log('Usuario registrado:', this.data);
            alert('Registro exitoso. Redirigiendo al login...');
            this.router.navigate(['/login/ingresar']);
          } else {
            alert('Ingrese un correo electrónico válido.');
          }
        } else {
          alert('Las contraseñas no coinciden.');
        }
      } else {
        alert('La contraseña debe tener 4 dígitos numéricos.');
      }
    } else {
      alert('El usuario debe tener entre 3 y 8 caracteres alfanuméricos.');
    }
  }
}
