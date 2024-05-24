import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensajeErrorService {

  constructor(private _snackBar: MatSnackBar) { }

  mostrarError(mensaje: string) {
    const verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    this._snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      verticalPosition: verticalPosition
    });
  }
}
