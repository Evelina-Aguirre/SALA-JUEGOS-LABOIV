import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TecladoVirtualComponent } from './teclado-virtual/teclado-virtual.component';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [NavbarComponent,TecladoVirtualComponent],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {

  private palabras: string[] = ['banana', 'manzana', 'naranja']; 
  private palabraActual: string = ''; 
  public palabraOcultada: string = ''; 

  constructor() { 
    this.palabraAlAzar();
    this.inicializarPalabra();
  }

 palabraAlAzar(): void {
    const randomIndex = Math.floor(Math.random() * this.palabras.length);
    this.palabraActual = this.palabras[randomIndex];
  }

inicializarPalabra(): void {
    this.palabraOcultada = '_'.repeat(this.palabraActual.length); 
  }

  

}
