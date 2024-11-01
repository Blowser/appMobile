import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  appTitle: string = 'SkeletonApp';
  welcomeMessage: string = '¡Bienvenido!';
  subtitleMessage: string = 'Inicia sesión';
  exploreMessage: string = 'Explora la app';
  footerText: string = 'Aquí comienza todo';

  constructor() {}
}
