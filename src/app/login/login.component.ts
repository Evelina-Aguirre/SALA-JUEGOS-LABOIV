import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  usuario : string = "";
  contrasenia : string ="";

  constructor(private router: Router, private renderer: Renderer2) {}
  ngOnInit(): void {
    
  }

  iniciarSesion(){
    if(this.usuario == "me" && this.contrasenia =="123")
    {
      this.router.navigate(['./home']);
    }
    else{
      alert("ERROR");
    }
  }
  
}
