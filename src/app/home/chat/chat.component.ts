import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';




@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
 
  usuarioLogueado: string| null = null;
  mensajes: any[] = [];
  nuevoMensaje: string = '';

  constructor(private chatService: ChatService,private authService: AuthService) {
    this.chatService.getMessages().subscribe((data: any) => {
      this.mensajes = data;
    });
  }


  ngOnInit(): void {
  /*  this.authService.getCurrentUser().subscribe(user => {
      if(user)
        {
          this.usuarioLogueado = user?.email;
        }
      else {
        this.usuarioLogueado = null; 
      }
    });*/
  }
/*
  sendMessage() {
    if (this.nuevoMensaje.trim() !== '') {
      this.chatService.addMessage('User1', this.nuevoMensaje);
      this.nuevoMensaje = '';
  }

  }
//*/
}



  


