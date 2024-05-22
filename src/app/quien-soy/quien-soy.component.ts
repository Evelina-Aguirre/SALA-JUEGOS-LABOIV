import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavbarComponent } from '../home/navbar/navbar.component';
@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
})
export class QuienSoyComponent implements OnInit{
  usuarioLogueado: string| null = null;

  constructor(private router:Router,private authService: AuthService){}
 
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
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
  }
  
  atras(){
    this.router.navigate(['/home']);
  }
}