import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { MensajeErrorService } from '../../services/mensaje-error.service';



@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,FormsModule,NavbarComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',

})
export class ChatComponent implements OnInit{
  usuarioLogueado: string| null = null;
  mensajes: any[] = [];
  nuevoMensaje: string = '';

  constructor(private chatService: ChatService,
    private authService: AuthService,
  private msjError : MensajeErrorService) 
  {
    this.chatService.getMessages().subscribe((data: any) => {
      this.mensajes = data;
    });
  }
  
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
    this.chatService.getMessages().subscribe((data: any[]) => {
      this.mensajes = data.sort((a, b) => b.timestamp - a.timestamp);
    });
    
  }

  enviarMensaje() {
   if(this.usuarioLogueado!= null){
     if (this.nuevoMensaje.trim() !== '') {
     const nombreEmisor= this.usuarioLogueado || 'usuario anónimo';
       this.chatService.addMessage(nombreEmisor, this.nuevoMensaje);
       this.nuevoMensaje = '';
   }
  }else{
    this.msjError.mostrarError('Debes loguearte para utilizar el chat.');
   }
   console.log("ya salí");

  }
 
 
  }




  


