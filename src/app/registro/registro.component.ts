import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth";
import { FirebaseAppModule } from '@angular/fire/app';
import { MatSnackBar, MatSnackBarModule, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NavbarComponent } from '../home/navbar/navbar.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule,FirebaseAppModule,NavbarComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  nuevoUsuarioPDW :string="";
  nuevoUsuarioMail:string="";

  usarMail:string="";
  usrPWD:string="";

  usuarioLogueado: string | null = null; 

constructor(private auth :Auth, private _snackBar: MatSnackBar,private router: Router) {}


Registrar(){
  createUserWithEmailAndPassword(this.auth, this.nuevoUsuarioMail, this.nuevoUsuarioPDW).then(res=>{
    if(this.usarMail!= null){
      this.usuarioLogueado=res.user.email;
      console.log(this.usuarioLogueado);
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
}
