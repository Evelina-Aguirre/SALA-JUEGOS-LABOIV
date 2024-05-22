import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  usuarioLogueado: string| null = null;
  messages: any[] = [];
  newMessage: string = '';


  constructor(private authService: AuthService){}

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





  }


