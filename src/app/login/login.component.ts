import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { User } from 'firebase/auth';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
import { MensajeErrorService } from '../services/mensaje-error.service';



@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule, CommonModule, MatSnackBarModule]
})
export class LoginComponent implements OnInit {

  userMail: string = "";
  userPWD: string = "";
  userLogueado: string = "";
  public miObservable: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private router: Router, 
    public auth: Auth,
     private _snackBar: MatSnackBar, 
     private firestore: Firestore,
    private msjError :MensajeErrorService) { }

  ngOnInit(): void {

  }

  registroLog() {
    let col = collection(this.firestore, 'logins');
    console.log(col);
    addDoc(col, { fecha: new Date(), "user": this.userMail });
  }

  Login() {

    signInWithEmailAndPassword(this.auth, this.userMail, this.userPWD).then((res) => {
      if (res.user.email !== null) {
        this.registroLog();
        this.userLogueado = res.user.email;
        /* this.miObservable.subscribe((res)=>{
           console.log("Se ha logueado el usuario" + res);});*/
        this.router.navigate(['./home']);
      } else {
        this.msjError.mostrarError('Error autenticación.')
      }
    }).catch((e) => {
      if (e.code === 'auth/invalid-email') {
        this.msjError.mostrarError('Error, ingresa email.');

      } else if (e.code === 'auth/missing-password') {
        this.msjError.mostrarError('Debes completar ambos campos.');
        
      } else if ('auth/weak-password') {
        this.msjError.mostrarError('La contraseña debe contener al menos 6 carácteres.');
      }
      console.error('Error de autenticación:', e);
    });
  }


  AccesoDirecto() {
    console.log(this.userLogueado);
    this.userMail = 'a@gmail.com';
    this.userPWD = '1111111';
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }




}
