import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { PreguntadosService } from '../../../services/preguntados.service';
import { CommonModule } from '@angular/common';
import { Pregunta } from './pregunta.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent {

  preguntas: Pregunta[] = [];
  preguntaArrayActual: any;
  opciones: string[] = [];
  respuestaCorrecta: string = "";
  preguntaAMostrar: string = "";
  rtaAMostrar: string = "";
  resultado: boolean = false;
  mensaje: string = "";
  img: string = "";
  contadorIntentos: number = 0;
  contadorGano: number = 0;
  respuestaSeleccionada:string="";
  continuar:boolean=false;

  constructor(private pregServ: PreguntadosService) {
    this.obtenerPreguntas();
  }

  /*ngOnInit(): void {
    /*this.preguntaActual= {
      "id": 1,
      "pregunta": "¿Cuál es el órgano más grande del cuerpo humano?",
      "respuesta": "Piel.",
      "imgUrl":"https://st3.depositphotos.com/2535571/16227/v/950/depositphotos_162276376-stock-illustration-cartoon-human-organs-set.jpg"
    }*/
  /*this.obtenerPreguntas();
}*/

  obtenerPreguntas() {
    this.pregServ.traerDatosApi().subscribe((data: Pregunta[]) => {
      this.preguntas = data;
      if (this.preguntas.length > 0) {
        this.preguntaArrayActual = this.preguntas[0];
        this.preguntaAMostrar = this.preguntas[0].pregunta;
        console.log("OBTENERPRG PREG ARRAY ACTUAL", this.preguntaArrayActual);
        this.mostrarNuevaPregunta();
      }
      console.log("Preguntas OBTENER PREGUNTA:", this.preguntas);
      this.mostrarNuevaPregunta();
    });
  }

  mostrarNuevaPregunta() {
    const indexRandom = Math.floor(Math.random() * this.preguntas.length);
    this.preguntaArrayActual = this.preguntas[indexRandom];
    this.preguntaAMostrar = this.preguntas[indexRandom].pregunta;
    this.rtaAMostrar = this.preguntas[indexRandom].respuesta;
    this.img = this.preguntas[indexRandom].imgUrl;

    if (this.preguntaArrayActual) {
      this.respuestaCorrecta = this.preguntaArrayActual.respuesta;
      this.opciones = this.obtenerOpciones();
    } else {
      console.log("No se pudo conseguir nueva pregunta");
    }
    this.continuar=false;

  }


  obtenerOpciones() {
    const opciones: string[] = [];
    opciones.push(this.respuestaCorrecta);
    while (opciones.length < 4) {
      const opcionAleatoria = this.preguntas[Math.floor(Math.random() * this.preguntas.length)].respuesta;
      if (!opciones.includes(opcionAleatoria)) {
        opciones.push(opcionAleatoria);
      }
    }
    return this.shuffle(opciones);
  }

  shuffle(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  verificarRespuesta() {
    if (this.respuestaSeleccionada === this.respuestaCorrecta) {
      this.resultado = true;
      this.mensaje = '\\(^▽^)/ Respuesta correcta!';
      this.contadorGano++;
   

    } else {
      this.resultado = true;
      this.mensaje = '(╥_╥) La respuesta correcta era:  ' + this.respuestaCorrecta +'  ';
    }
    this.contadorIntentos++;
   
  }

  proximaPregunta(){
    this.mensaje="";
    this.mostrarNuevaPregunta();
  }
}
