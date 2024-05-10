import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule,MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';
import { User } from 'firebase/auth';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  userMail: string = "";
  userPWD: string = "";
  userLogueado: string ="";

  constructor(private router: Router,public auth: Auth,private _snackBar: MatSnackBar,private firestore: Firestore) {
 
  }
  
  ngOnInit(): void {
    
  }

  registreLog(){
let col = collection(this.firestore, 'logins');
console.log(col);
addDoc(col, { fecha: new Date(), "user": this.userMail});
  }

  Login() {
    
    signInWithEmailAndPassword(this.auth, this.userMail, this.userPWD).then((res) => {
      if (res.user.email !== null) {
        this.registreLog();
        this.userLogueado = res.user.email; 
        this.router.navigate(['./home']);
      } else {
        this.mostrarError('ERROR DE AUTENTICACIÓN');
      }
    }).catch((e) => {
      console.error('Error de autenticación:', e);
      this.mostrarError('ERROR DE AUTENTICACIÓN');
    });
  }
  mostrarError(mensaje: string) {
    const verticalPosition: MatSnackBarVerticalPosition = 'bottom'; 
    this._snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      verticalPosition: verticalPosition 
    });
  }
  
  AccesoDirecto() {
    console.log(this.userLogueado);
    this.userMail = 'a@gmail.com';
    this.userPWD = '1111111';
  }
  
}
