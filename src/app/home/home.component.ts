import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { User } from 'firebase/auth';
import { CommonModule } from '@angular/common';
import { JuegosComponent } from './juegos/juegos.component';
import { ChatComponent } from './chat/chat.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,JuegosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
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
  irAQuienSoy() {
    this.router.navigate(['/quien-soy']);
  }
}
