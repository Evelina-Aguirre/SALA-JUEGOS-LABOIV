import { Component, EventEmitter, Output, Input, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TecladoVirtualComponent } from './teclado-virtual/teclado-virtual.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { listaPalabras } from './palabras';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [NavbarComponent, TecladoVirtualComponent, CommonModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent implements AfterViewChecked {

  palabras: string[] = listaPalabras;
  palabraActual: string = '';
  palabraOcultada: string = '';
  letraElejida: string = '';
  estaEnLaPalabra: boolean = false;
  intentos: number = 0;
  maxIntentos: number = 8;
  ahorcadoImagenes: string[] = [
    '../../../../assets/images/ahoracado fondo.png',
    '../../../../assets/images/intento1.png',
    '../../../../assets/images/intento2.png',
    '../../../../assets/images/intento3.png',
    '../../../../assets/images/intento4.png',
    '../../../../assets/images/intento5.png',
    '../../../../assets/images/intento6.png',
    '../../../../assets/images/intento7b.png',
    '../../../../assets/images/intento8.png'
  ];
  puntosAcumulados: number = 0;
  vuelta: number = 0;
  imagenActual: string = this.ahorcadoImagenes[0];
  public letrasPresionadas: string[] = [];
  public terminoJuego: boolean = false;


  constructor(private router: Router, private cambio: ChangeDetectorRef) {
    this.palabraAlAzar();
    this.inicializarPalabra();

  }
  ngAfterViewChecked(): void {
    if (this.verificarGano() || this.verificarPerdio()) {
      this.vuelta++;
      this.terminoJuego = true;
      this.cambio.detectChanges();
    }
  }

  palabraAlAzar() {
    const randomIndex = Math.floor(Math.random() * this.palabras.length);
    this.palabraActual = this.palabras[randomIndex];
  }

  inicializarPalabra() {
    this.palabraOcultada = '_ '.repeat(this.palabraActual.length);
  }

  recibirLetra(letra: string) {
    this.letraElejida = letra;
    this.estaEnLaPalabra = this.buscarLetraEnPalabra(this.letraElejida);
    if (this.estaEnLaPalabra) {
      this.actualizaPalabraOcultada(letra);
    } else {
      this.intentos++;
      this.actualizarImagenAhorcado();
    }
  }

  buscarLetraEnPalabra(letra: string) {
    return this.palabraActual.includes(letra);
  }

  actualizaPalabraOcultada(letra: string) {
    let nuevaPalabraOcultada = '';

    for (let i = 0; i < this.palabraActual.length; i++) {
      if (this.palabraActual[i] === letra) {
        nuevaPalabraOcultada += letra + ' ';
      } else {
        nuevaPalabraOcultada += this.palabraOcultada[i * 2] + ' ';
      }
    }

    this.palabraOcultada = nuevaPalabraOcultada.trim();
  }

  actualizarImagenAhorcado() {
    if (this.intentos <= this.maxIntentos) {
      this.imagenActual = this.ahorcadoImagenes[this.intentos];
    }
  }

  verificarGano() {
    return !this.palabraOcultada.includes('_');
  }

  verificarPerdio() {
    console.log(this.intentos);
    return this.intentos == this.maxIntentos;
  }

  gano() {
    if (this.verificarGano()) {
      this.puntosAcumulados++;
      return true;
    }
    return false;
  }

  perdio() {
    return this.verificarPerdio();
  }

  reiniciarJuego() {
    this.palabraAlAzar();
    this.inicializarPalabra();
    this.intentos = 0;
    this.imagenActual = this.ahorcadoImagenes[0];
    this.terminoJuego = false;
   /* this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/ahorcado']);
    });*/

  }

}
