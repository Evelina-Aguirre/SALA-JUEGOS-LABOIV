import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Pregunta } from '../home/juegos/preguntados/pregunta.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

  constructor(private http:HttpClient) {
   }

   traerDatosApi(): Observable<Pregunta[]> {
    return this.http.get<any>('https://mocki.io/v1/e00dfa95-d483-47d9-9df0-c3cf111aa011')
      .pipe(
        map(data => data.preguntas.map((item: any) => ({
          id: item.id,
          pregunta: item.pregunta,
          respuesta: item.respuesta,
          imgUrl: item.imgUrl
        })))
      );
  }
}
