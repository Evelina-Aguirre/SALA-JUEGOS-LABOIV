import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ViewChild, ElementRef, Output,Input, EventEmitter } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-propio',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './juego-propio.component.html',
  styleUrl: './juego-propio.component.css'
})
export class JuegoPropioComponent implements OnDestroy{


  laberinto: number[][] = [
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2]
  ];

  jugadorX: number = 0;
  jugadorY: number = 0;
  mensaje: String = "";
  timer:any;
  tiempoRestante:number=0;
  tiempoTranscurrido:number = 0;
  juegoActivo:boolean=false;


  constructor(private router: Router) {
  }



  iniciarJuego() {
    const tiempoTotal = 15000;
    this.juegoActivo=true;

    this.timer = setInterval(() => {  
      this.tiempoTranscurrido += 1000;
  
      if (this.tiempoTranscurrido == tiempoTotal) {
        clearInterval(this.timer); 
        clearTimeout(this.timer);
        this.mensaje = "Se acabó el tiempo! (╥_╥)"
      }
    },1000); 
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }


  moverJugador(event: KeyboardEvent) {
    if(this.juegoActivo)
      {
        switch (event.key) {
          case 'ArrowUp':
            console.log("arriba");
            if (this.jugadorX > 0 && this.laberinto[this.jugadorX - 1][this.jugadorY] === 0) {
              this.jugadorX--;
            }
            break;
          case 'ArrowDown':
            if (this.jugadorX < this.laberinto.length - 1 &&
              (this.laberinto[this.jugadorX + 1][this.jugadorY] === 2 || this.laberinto[this.jugadorX + 1][this.jugadorY] === 0)) {
              this.jugadorX++;
    
            }
            break;
          case 'ArrowLeft':
            if (this.jugadorY > 0 && (this.laberinto[this.jugadorX][this.jugadorY - 1] === 2 || this.laberinto[this.jugadorX][this.jugadorY - 1] === 0)) {
              this.jugadorY--;
    
            }
            break;
          case 'ArrowRight':
            if (this.jugadorY < this.laberinto[this.jugadorX].length - 1 &&
              (this.laberinto[this.jugadorX][this.jugadorY + 1] === 2 || this.laberinto[this.jugadorX][this.jugadorY + 1] === 0)) {
              this.jugadorY++;
            }
            break;
        }
    
        if (this.laberinto[this.jugadorX][this.jugadorY] === 2) {
          this.mensaje = "¡GANASTE! \\(^▽^)/ "
          clearInterval(this.timer); 
          clearTimeout(this.timer);
        }
      }
  }

  resultado() {
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/laberinto']);
    });
  }
}
