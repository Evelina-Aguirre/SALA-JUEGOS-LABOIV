import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CartaInterface } from './carta.interface';
import { CartasService } from '../../../services/cartas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mayormenor',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './mayormenor.component.html',
  styleUrl: './mayormenor.component.css'
})
export class MayormenorComponent {

  mazo: CartaInterface[] = [];
  prediccion: string = '';
  cartaAnterior: CartaInterface | null = null;
  cartaActual: CartaInterface | null = null;
  transitoria: CartaInterface | null = null;
  puntosAcumulados: number = 0;
  gano: boolean = false;
  perdio: boolean = false;
  contador: number = 0;
  mensajeElegido: string | null = null;
  intentos: number = 0;

  constructor(private cartas: CartasService) {
    cartas.generarMazo();
    this.mazo = cartas.mazo;
    this.inicializar();
  }

  inicializar() {
    this.cartaAnterior = this.cartas.cartaSignoPregunta;
    this.cartaActual = this.cartas.cartaInicial;
    this.transitoria = this.cartas.cartaInicial;
  }
  obtenerCarta() {
    const randomIndex = Math.floor(Math.random() * this.mazo.length);
    this.cartaActual = this.mazo[randomIndex];
  }

  seleccionar(opcion: string) {
    this.mensajeElegido = `Elegiste ${opcion}`;
    this.prediccion = opcion;
  }



  jugar() {
    if (this.cartaActual && this.cartaAnterior && this.transitoria) {

      console.log("jugar principio actual:", this.cartaAnterior);
      console.log("jugar principio anterior:", this.cartaActual);

      this.obtenerCarta();
      this.cartaAnterior = this.transitoria;

      const valorAnterior = this.cartaAnterior.numero;
      const valorActual = this.cartaActual.numero;

      this.intentos++;
      const prediccionCorrecta = (this.prediccion === 'MAYOR' && valorActual > valorAnterior) ||
        (this.prediccion === 'MENOR' && valorActual < valorAnterior);

      console.log("Carta anterior:", valorAnterior);
      console.log("Carta actual:", valorActual);
      console.log("Predicción correcta:", prediccionCorrecta);
      console.log(this.contador);
      this.contador++;
      if (prediccionCorrecta) {
        this.puntosAcumulados++;
      } else {
        this.perdio = true;
      }
      console.log("jugar final actual:", this.cartaAnterior);
      console.log("jugar final anterior:", this.cartaActual);

      return this.gano = prediccionCorrecta;
    }
    return false;

  }

  continuar() {
    this.cartaAnterior = this.cartaActual;
    this.transitoria = this.cartaActual;
    this.cartaActual = this.cartas.cartaSignoPregunta;
    this.gano = false;
    this.perdio = false;
    this.mensajeElegido = null;

  }
}
