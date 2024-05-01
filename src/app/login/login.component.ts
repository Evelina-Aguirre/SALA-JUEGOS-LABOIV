import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  errorMSJ : string = "";


  userMail: string = "";
  userPWD: string = "";

  loggedUser: string = "";
  constructor(private router: Router,public auth: Auth) {}
  ngOnInit(): void {
    
  }

  Login() {
    signInWithEmailAndPassword(this.auth, this.userMail, this.userPWD).then((res) => {
      if (res.user.email !== null) {
        this.loggedUser = res.user.email; 
        this.router.navigate(['./home']);}
        else
        {

        }
    }).catch((e) => this.errorMSJ=e);
  }

  CloseSession(){
    signOut(this.auth).then(() => {
      console.log(this.auth.currentUser?.email)
    })
  }
  
}
