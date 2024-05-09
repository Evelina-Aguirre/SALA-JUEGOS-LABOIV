import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  usuarioLogueado: User | null = null;

  constructor(public auth: Auth) { 
    this.auth.onAuthStateChanged(user => {
      this.usuarioLogueado = user;
      console.log("servicio auth usuario logueado",user);
    });
  }

  getCurrentUser(): Observable<User | null> {
    return new Observable(observer => {
      observer.next(this.usuarioLogueado);
    });
  }

  logout(): Promise<void> {
    return this.auth.signOut();
  }
 
}