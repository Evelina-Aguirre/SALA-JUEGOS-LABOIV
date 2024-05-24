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

usuarioLogueado: string| null = null;

constructor(private authService : AuthService, private router:Router) {}
  ngOnInit(): void {
    console.log("ENTRE ONINIT NAVBAR");
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

mostrarBotonVolver(): boolean {
  const currentUrl = this.router.url;
  return currentUrl !== '/home' && currentUrl !== '/registro';
}

getButtonText(): string {
  return this.usuarioLogueado ? 'cerrar sesión' : 'login';
}

volver(){
  this.router.navigate(['./home']);
}

}
