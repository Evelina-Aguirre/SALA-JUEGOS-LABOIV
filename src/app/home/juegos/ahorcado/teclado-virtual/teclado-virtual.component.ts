import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-teclado-virtual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teclado-virtual.component.html',
  styleUrl: './teclado-virtual.component.css'
})
export class TecladoVirtualComponent {

  letras: string[] = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
  fila1: string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  /*fila2: string[] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  fila3: string[] = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];*/
  
  
  constructor() { }
  
  @Output() letraClickeada = new EventEmitter<string>(); 
 
  enviarLetraClickeada(letra: string): void {
    this.letraClickeada.emit(letra); 
  }

}
