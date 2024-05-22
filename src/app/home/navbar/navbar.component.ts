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
mostrarBotonVolver:boolean  = false;

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

    this.router.events.subscribe(val => {
      if (this.router.url === '/home') {
        this.mostrarBotonVolver=false;
        console.log('noseve');
      } else{
        this.mostrarBotonVolver = true;
        console.log('debeería verse');
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
  return this.usuarioLogueado ? 'cerrar sesión' : 'login';
}

volver(){
  this.router.navigate(['./home']);
}

}
