import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { PreguntadosService } from '../../../services/preguntados.service';
import { CommonModule } from '@angular/common';
import { Pregunta } from './pregunta.interface';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent implements OnInit{

  preguntas: Pregunta[] = [];
  preguntaActual: any;
  opciones: string[] = [];
  respuestaCorrecta: string="";


  constructor(private pregServ: PreguntadosService) { 
  }

  ngOnInit(): void {
    this.obtenerPreguntas();
  }

  obtenerPreguntas() {
    this.pregServ.traerDatosApi().subscribe((data: Pregunta[]) => {
      this.preguntas = data;
      console.log("Preguntas recibidas:", this.preguntas);
      this.mostrarNuevaPregunta();
    });
  }

  mostrarNuevaPregunta() {
    const indexRandom = Math.floor(Math.random() * this.preguntas.length);
    this.preguntaActual = this.preguntas[indexRandom].pregunta;
    console.log("PREGUNTAA ACTUAL EN MOSTRAR NUEVA",this.preguntaActual);

    if (this.preguntaActual) {
      this.respuestaCorrecta = this.preguntaActual.respuesta;
      this.opciones = this.obtenerOpciones();
      console.log("OBTUVE ESTE PREG",this.preguntaActual)
    }else{
      console.log("OBTUVE ESTE PREG",this.preguntaActual)
      console.log("No se pudo conseguir nueva pregunta");
    }
  }

  obtenerOpciones(){
    const opciones: string[] = [];
    opciones.push(this.respuestaCorrecta);

    while (opciones.length < 4) 
      {
      const opcionAleatoria = this.preguntas[Math.floor(Math.random() * this.preguntas.length)].respuesta;
      if (!opciones.includes(opcionAleatoria)) {
        opciones.push(opcionAleatoria);
      }
    }
    return this.shuffle(opciones);
  }

  shuffle(array: any[]){
  return array.sort(() => Math.random() - 0.5);
  }

  verificarRespuesta(respuesta: string) {
    if (respuesta === this.respuestaCorrecta) {
      console.log('Respuesta correcta!');
    } else {
      console.log('Respuesta incorrecta. La respuesta correcta era: ' + this.respuestaCorrecta);
    }
    this.mostrarNuevaPregunta();
  }
}
