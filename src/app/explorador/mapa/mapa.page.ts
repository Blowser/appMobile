import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage {


  constructor(private router: Router) {}

  navigateTo(page: string) {
    if (page === 'modificarperfil') {
      this.router.navigate(['/modificarperfil']);
    } else if (page === 'inicio') {
      this.router.navigate(['/home']); // Redirige a la página de inicio
    }
  }
}
