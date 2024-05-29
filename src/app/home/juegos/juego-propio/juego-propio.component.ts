import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-juego-propio',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './juego-propio.component.html',
  styleUrl: './juego-propio.component.css'
})
export class JuegoPropioComponent {
 
  laberinto: number[][] = [
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
];

  jugadorX: number = 0;
  jugadorY: number = 0;

  moverJugador(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        console.log("arriba");
        if (this.jugadorX > 0 && this.laberinto[this.jugadorX - 1][this.jugadorY] === 0) {
          this.jugadorX--;
          console.log("jugador en X:", this.jugadorX);
          console.log("jugador en Y:", this.jugadorY);
        }
        break;
      case 'ArrowDown':
        console.log("abajo");
        if (this.jugadorX < this.laberinto.length - 1 && 
          (this.laberinto[this.jugadorX + 1][this.jugadorY] === 2 || this.laberinto[this.jugadorX + 1][this.jugadorY] === 0) ) {
          this.jugadorX++;
          console.log("jugador en X:", this.jugadorX);
          console.log("jugador en Y:", this.jugadorY);
          console.log("jugador en Xy:", this.laberinto[this.jugadorX][this.jugadorY] );
        }
        break;
      case 'ArrowLeft':
        console.log("izq");
        if (this.jugadorY > 0 && (this.laberinto[this.jugadorX][this.jugadorY - 1] === 2 ||this.laberinto[this.jugadorX][this.jugadorY - 1] === 0)) {
          this.jugadorY--;
          console.log("jugador en X:", this.jugadorX);
          console.log("jugador en Y:", this.jugadorY);
          console.log("jugador en Xy:", this.laberinto[this.jugadorX][this.jugadorY] );
        }
        break;
      case 'ArrowRight':
        console.log("derecha");
    if (this.jugadorY < this.laberinto[this.jugadorX].length - 1 &&  (this.laberinto[this.jugadorX][this.jugadorY + 1] === 2 || this.laberinto[this.jugadorX][this.jugadorY + 1] === 0)) {
      this.jugadorY++;
      console.log("jugador en Xy:", this.laberinto[this.jugadorX][this.jugadorY] );

     }
        break;
    }

    if (this.laberinto[this.jugadorX][this.jugadorY] === 2) {
      alert('Ganaste!');
      console.log("jugador en X:", this.jugadorX);
      console.log("jugador en Y:", this.jugadorX);
      alert('¡Ganaste!');
      console.log("¡Ganaste!");
    }
  }
}
