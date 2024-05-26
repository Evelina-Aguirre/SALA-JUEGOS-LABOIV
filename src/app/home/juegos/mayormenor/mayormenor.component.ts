import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CartaInterface } from './carta.interface';
import { CartasService } from '../../../services/cartas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mayormenor',
  standalone: true,
  imports: [NavbarComponent, CommonModule,FormsModule],
  templateUrl: './mayormenor.component.html',
  styleUrl: './mayormenor.component.css'
})
export class MayormenorComponent {

  mazo: CartaInterface[] = [];
  cartaAnterior: CartaInterface | null = null;
  cartaActual: CartaInterface | null = null;
  prediccion:string='';

  constructor(private cartas: CartasService) {
    cartas.generarMazo();
    this.mazo = cartas.mazo;
    console.log(this.mazo);
  }
  obtenerCarta() {
    const randomIndex = Math.floor(Math.random() * this.mazo.length);
    this.cartaActual = this.mazo[randomIndex];
    console.log("la carta que obtuvee",this.cartaActual);
  }

  seleccionar(opcion: string) {
    this.prediccion = opcion; 
  }
  
  jugar() {
    this.obtenerCarta();
    if (!this.cartaActual || !this.cartaAnterior) {
      return false;
    }
    const valorActual = this.cartaActual.numero;
    const valorAnterior = this.cartaAnterior.numero;

    const prediccionCorrecta = (this.prediccion === 'mayor' && valorActual > valorAnterior) ||
      (this.prediccion === 'menor' && valorActual < valorAnterior);

    this.cartaAnterior = this.cartaActual;
    this.obtenerCarta();

    return prediccionCorrecta;
  }

}
