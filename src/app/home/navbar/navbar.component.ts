import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
  import { Route } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

usuarioLogueado: string| null = null;

constructor(private authService : AuthService, private router:Router) {}
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      if(user)
        {
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
getButtonText(): string {
  return this.usuarioLogueado ? 'Cerrar Sesión' : 'Volver al inicio';
}
}
