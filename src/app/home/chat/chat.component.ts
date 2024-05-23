import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';
<<<<<<< HEAD
import { ChatService } from '../../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { NavbarComponent } from '../navbar/navbar.component';
=======
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

>>>>>>> f8759934fda30ca55a14ebe76ff150a310912d2b



@Component({
  selector: 'app-chat',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule,FormsModule,NavbarComponent],
=======
  imports: [CommonModule, FormsModule, NavbarComponent],
>>>>>>> f8759934fda30ca55a14ebe76ff150a310912d2b
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',

})
export class ChatComponent implements OnInit{
 
  usuarioLogueado: string| null = null;
  mensajes: any[] = [];
  nuevoMensaje: string = '';

<<<<<<< HEAD
  constructor(private chatService: ChatService,private authService: AuthService,private _snackBar: MatSnackBar) {
=======
  constructor(private chatService: ChatService,private authService: AuthService) {
>>>>>>> f8759934fda30ca55a14ebe76ff150a310912d2b
    this.chatService.getMessages().subscribe((data: any) => {
      this.mensajes = data;
    });
  }
<<<<<<< HEAD

  ngOnInit(): void {
  this.authService.getCurrentUser().subscribe(user => {
=======


  ngOnInit(): void {
  /*  this.authService.getCurrentUser().subscribe(user => {
>>>>>>> f8759934fda30ca55a14ebe76ff150a310912d2b
      if(user)
        {
          this.usuarioLogueado = user?.email;
        }
      else {
        this.usuarioLogueado = null; 
      }
<<<<<<< HEAD
    });
    this.chatService.getMessages().subscribe((data: any[]) => {
      this.mensajes = data.sort((a, b) => a.timestamp - b.timestamp);
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
    this.mostrarError('Debes loguearte para utilizar el chat.');
   }
   console.log("ya salí");

  }

  mostrarError(mensaje: string) {
    const verticalPosition: MatSnackBarVerticalPosition = 'top';
    this._snackBar.open(mensaje, 'Cerrar', {
      duration: 2000,
      verticalPosition: verticalPosition
    });
  }




=======
    });*/
  }
/*
  sendMessage() {
    if (this.nuevoMensaje.trim() !== '') {
      this.chatService.addMessage('User1', this.nuevoMensaje);
      this.nuevoMensaje = '';
  }

>>>>>>> f8759934fda30ca55a14ebe76ff150a310912d2b
  }
//*/
}



  


