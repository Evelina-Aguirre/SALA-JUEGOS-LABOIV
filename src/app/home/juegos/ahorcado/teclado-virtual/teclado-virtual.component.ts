import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-teclado-virtual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teclado-virtual.component.html',
  styleUrl: './teclado-virtual.component.css'
})
export class TecladoVirtualComponent{

  fila1: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
  'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  letrasPresionadas:string[] = [];
  @Output() letraClickeada = new EventEmitter<string>();
  @Input() terminoJuego:boolean = false;


  constructor() { }

  enviarLetraClickeada(letra: string): void {
    this.letraClickeada.emit(letra);
    this.letrasPresionadas.push(letra);
  }

  letraPresionada(letra: string): boolean {
    return this.letrasPresionadas.includes(letra); 
  }

}
