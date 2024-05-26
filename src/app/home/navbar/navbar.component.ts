import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  usuarioLogueado: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.usuarioLogueado = user?.email;
      }
      else {
        this.usuarioLogueado = null;
      }
    });
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['./login']);
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
  }

  retorno: boolean = true;
  url: string = '';

  botonAtras() {
    const currentUrl = this.router.url;
    switch (currentUrl) {
      case '/home':
        this.retorno = false;
        break;
      case '/registro':
        this.retorno = false;
        break;
      case '/ahorcado':
      case '/mayormenor':
      case '/preguntados':
        this.url = '/juegos';
        this.retorno = true;
        break;
      default:
        this.url = '/home';
        this.retorno = true;
        break;
    }
    return this.retorno;
  }

  getButtonText(): string {
    return this.usuarioLogueado ? 'cerrar sesión' : 'login';
  }

  navegar(string: string) {
    this.router.navigate([string]);
  }

}
