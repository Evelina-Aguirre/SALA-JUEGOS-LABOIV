import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Inject, inject } from '@angular/core';
import { Route } from '@angular/router';
import { MensajeErrorService } from '../services/mensaje-error.service';

export const usuarioLogueadoGGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const ruta = inject(Router);
  const msjError = inject(MensajeErrorService);
  const rutaActual = ruta.url;

  console.log(ruta);

  if (auth.usuarioLogueado == null) {
    console.log(ruta.url);
    msjError.mostrarError("Debes loguearte para poder utilizar el chat.");
    ruta.navigate(['/home']);
 
  }


  return true;
};
