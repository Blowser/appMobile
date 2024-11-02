import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any = { usuario: '' };

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.queryParams.subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras && navigation.extras.state) {
        console.log('Datos recibidos en Home:', navigation.extras.state); // Agregado para depurar
        if (navigation.extras.state.usuario) {
          this.data.usuario = navigation.extras.state.usuario;
        } else {
          console.warn('La clave "usuario" no existe en extras.state');
          this.router.navigate(['/login/ingresar']);
        }
      } else {
        console.error('No se encontraron datos en extras.state');
        this.router.navigate(['/login/ingresar']);
      }
    });
  }

  ngOnInit() {}
}


